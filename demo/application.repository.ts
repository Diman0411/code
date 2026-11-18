import { BookRepository } from "./book.repository";
import { UserRepository } from "./user.repository";
import { RewiewRepository } from "./rewiew.repository";

export class ApplicationRepository{
    public readonly users:UserRepository;
    public readonly books:BookRepository;
    public readonly rewiew:RewiewRepository;

    constructor(){
        this.users = new UserRepository(this);
        this.books=new BookRepository(this);
        this.rewiew=new RewiewRepository(this);
    }
}
