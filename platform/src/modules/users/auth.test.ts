import { afterEach, describe, beforeEach, test, expect } from "bun:test";
import { Database } from 'bun:sqlite';
import { Hono } from "hono";
import type { ApplicationEnviroment } from "../application.types";
import { createTestClient } from "../testing/test-client";
import { UsersModule } from "./users.module";
import z, { email, success } from "zod";
import { password } from "bun";
import { userSchema, UserTokenSchema } from "./users.types";

const bindings = { JWT_SECRET: "test-jwt-secret" };

const account = {
    title: "TEST-USER-01",
    email: "test-user-01@nke.ru",
    password: "121345678",
}

const tokenResponsSchema = z.object({
    success: z.literal(true),
    data: UserTokenSchema,
});

const userResponseSchema = z.object({
    success: z.literal(true),
    data: userSchema,
})

describe("Авторизация", () => {
    let database: Database;
    let app: Hono<ApplicationEnviroment>;
    let client: ReturnType<typeof createTestClient>;

    beforeEach(() => {
        database = new Database(":memory:");

        const { authRouter, validate } = new UsersModule(database).init();

        app = new Hono<ApplicationEnviroment>();
        app.use("*", validate);
        app.route("/api/auth", authRouter);

        client = createTestClient(app, bindings);

    });

    afterEach(() => database.close());

    test("регистрация возвращает код 200", async () => {
        const respose = await client.post("/api/auth/register", account);

        expect(respose.status).toBe(200);
        expect(await respose.json()).toEqual({
            success: true,
            data: {
                token: expect.any(String),
            },
        });
    });

    test("Повторная регитрация возвращает 409", async () => {
        await client.post("/api/auth/register", account);
        const respose = await client.post("/api/auth/register", account);

        expect(respose.status).toBe(409);
    });

    test("вход с правильными данными возвращает токен", async () => {
        await client.post("/api/auth/register", account);
        const respose = await client.post("/api/auth/auth", {
            email: account.email,
            password: account.password
        });

        const result = tokenResponsSchema.parse(await respose.json());

        expect(respose.status).toBe(200);
        expect(result.data.token).toEqual(expect.any(String));

        const profile = await client.me(result.data.token);
        expect(profile.status).toBe(200);
        expect(await profile.json()).toMatchObject({
            success: true,
            data: {
                id: expect.any(Number),
                title: account.title,
                email: account.email,
            },
        });
    });

    test("неверный пароль возвращает 401", async () => {
        await client.post("/api/auth/register", account);
        const respose = await client.post("/api/auth/auth", {
            email: account.email,
            password: "dfgjhk",
        });
        expect(respose.status).toBe(401);
        expect(await respose.json()).toMatchObject({
            success: false,
        });
    });

    test("без токена возвращает 401", async () => {
        const respose = await client.me();

        expect(respose.status).toBe(401);
    });

    test("некорректный токен возвращает 401", async () => {
        const respose = await client.me("54635");

        expect(respose.status).toBe(401);
    });
});