import { ApplicationRepository } from "./application.repository";
import { BookItem } from "./book.types";

export class BookRepository{
    private readonly books: BookItem[] = [];
    
        constructor(private readonly application: ApplicationRepository){
            
        }
    
    
        public findAll(): BookItem[]{
            return this.books;
        }
    
        public existsById(id:number):boolean{
            return this.books.some(element => element.id === id);
        }
    
        public deleteById(id:number): void{
            const index = this.books.findIndex(element => element.id === id);
            if (index === -1){
                console.log("ERROR: BOOK NOT FOUND")
                return;
            }
        }
    
        public create(title:string, authorId: number):BookItem{
            const nextId = Math.max(
                ...this.books.map((book)=> book.id),
                0
            )+1;

            return {id:nextId, title, authorId}
        }
    
        public save(book : BookItem): void{
            if (!this.application.users.existsById(book.authorId)){
                console.log("ERROR: AUTHOR NOT FOUND");
                return;
            }

            if(this.books.some((element)=> element.id === book.id)) {
                console.log("ERROR: BOOK ALREADY EXISTS");
                return;
            }
            this.books.push(book);
        }  

        public removeBooksById(authorId:number) {
            if(!this.findAll().some(b=>b.authorId == authorId)){
                console.log('ERRORS: AUTHOR NOT FOUND');
            }
            return;
        }

        public deleteAllByAuthorId(authorId:number):void{
                this.books
                .filter(book => book.authorId === authorId)
                .forEach(book => this.deleteById(book.id))
        }
    }