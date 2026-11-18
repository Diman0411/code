import { NotesRepository } from "./notes/notes.repository";

export class RootRepository {
    private readonly notes: NotesRepository = new NotesRepository();

    public start():void{
        const server = Bun.serve({
            port: 3000,
            routes:{
                "/api/status/": () => Response.json({message:"OK"}),
                "/api/notes/": {
                    GET: () => Response.json({data: this.notes.findAll()}),

                    POST: async(request)=>{
                        const body = await request.json();

                        if(!body.content){
                            return Response.json({message:"BODY: Content not found"})
                        }

                        const item = this.notes.create(body.title,body.content);

                        return Response.json({data:item});
                    }
                },

                "/api/notes/:id/":{
                    GET: (request)=>{
                        const id = Number(request.params.id);
                        const item = this.notes.findById(id);

                        if (!item){
                            return Response.json({message: "ITEM NOT FOUND"});
                        }

                        return Response.json({data:item});
                    },

                    DELETE: (request)=>{
                        const id = Number(request.params.id);
                        const item = this.notes.findById(id);

                        if (!item){
                            return Response.json({message: "ITEM NOT FOUND"});
                        }

                        this.notes.removeById(item.id);

                        return Response.json({data: item});
                    },

                    PUT: async (request) => {
                        const id = Number(request.params.id);
                        const item = this.notes.findById(id);

                        if (!item) {
                            return Response.json({ message: "ITEM NOT FOUND" });
                        }

                        const body = await request.json();
                        if (!body.title || !body.content) {
                            return Response.json({ message: "ERROR" });
                        }
                        
                        const updatedItem = this.notes.update(id, body);

                        return Response.json({ data: updatedItem });
                    },

                    PATCH: async (request) => {
                        const id = Number(request.params.id);
                        const item = this.notes.findById(id);

                        if (!item) {
                            return Response.json({ message: "ITEM NOT FOUND" });
                        }

                        const body = await request.json();

                        if (!body.title && !body.content) {
                            return Response.json({ message: "ITEM NOT FOUND" });
                        }

                        const updatedItem = this.notes.update(id, body);

                        return Response.json({ data: updatedItem });
                    }
                }
            }   
        });

        console.log(`SERVER STARTED: ${server.url}`);
    }
}

