import {NoteItem } from "./notes.types";

export class NotesRepository {
    private readonly notes: NoteItem[] =[];

    constructor(){
        this.create("da","I want go to home)))");
        this.create("no","I want go to home)))))))))))))))))))))");
    }

    public findAll(): NoteItem[]{
        return this.notes;
    }

    public findById(id:number): NoteItem | undefined{
        return this.notes.find(note => note.id === id);
    }

    public create(title:string, content:string): NoteItem{
        const nextId:number = Math.max(
            ...this.notes.map((note) => note.id),
            0,
        ) +1;

        const item = {id: nextId,title, content};

        this.notes.push(item);

        return item;
    }

    public removeById(id:number){
        const index = this.notes.findIndex(element =>element.id);

        if (index === -1) {
            console.log("Error");
            return;
        }
    }

    public update(id: number, data: any) {
    const index = this.notes.findIndex(n => n.id === id);

    if (index === -1) return null;

    this.notes[index] = { ...data, id }; 

    return this.notes[index];
}


}

