import z from "zod";

export const userSchema = z.object(
  {
  id: z.number(),
  title: z.string().min(2),
  email: z.email(),
  password: z.string(),
});

export const userRegisterSchema = userSchema.omit({ id: true});
export const UserAuthSchema = userSchema.pick({ email: true, password: true});
export const UserTokenSchema = z.object({ token: z.string()});

export type UserType = z.infer<typeof userSchema>;
export type UseRegisterType = z.infer<typeof userRegisterSchema>;
export type UserAuthType = z.infer<typeof UserAuthSchema>;
export type UserTokenType = z.infer<typeof UserTokenSchema>;
