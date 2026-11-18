import { ApplicationRepository } from "./application.repository";
import { RewiewItem } from "./rewiew.type";

export class RewiewRepository{
    private readonly rewiew: RewiewItem[] = [];

    constructor(private readonly application: ApplicationRepository){

    }

    public findAll(): RewiewItem[]{
        return this.rewiew;
    }

    public existsById(id:number):boolean{
            return this.rewiew.some(element => element.id === id);
        }

    public create(bookId:number, userId:number, content:string):RewiewItem{
        const nextId = Math.max(
            ...this.rewiew.map((rewiew)=> rewiew.id),
            0
        )+1;
    
        return {id:nextId, bookId, userId, content};
    }

    public save(rewiew : RewiewItem): void{
        if (!this.application.rewiew.existsById(rewiew.userId)){
            console.log("ERROR: REWIEW NOT FOUND");
            return;
        }
    
        if(this.rewiew.some((element)=> element.id === rewiew.id)) {
            console.log("ERROR: REWIEW ALREADY EXISTS");
            return;
        }
        this.rewiew.push(rewiew);
    }
}