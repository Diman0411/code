//07.10--------------------------------------------------------------------------------------------------------------------

// const users: string[] = ['Nikita', 'Artem', 'Ivan'];
// function helloV1(): void {
//     console.log(1);
//     console.log('users');
// }
// const helloV1Anon =():void =>{
//     console.log(1);
//     console.log('users');
// }

// function helloV2(title: string, age:number):void{
//     console.log(`VALUE: ${title}, AGE: ${age}`);
// }
// const helloV2AnonV1 = (title:string, age:number):void =>{
//     console.log(`NAME: ${title}, AGE: ${age}`);
// }

// function helloV3(a: number, b:number): number{
//     return a+b;
// }

// function helloV4(a:number, b:number):number {
//     return a-b;
// }

// function helloV5(a:number, b:number): number{
//     return a*b;
// }

// function helloV6(a:number,b:number):number{
//     return a/b;
// }


// helloV2("Nikita", 25);
// helloV2("Artemka", 1488);

// console.log(`RESULT: ${helloV3(40, 2)+ helloV3(20,5)}`);
// console.log(`RESULT: ${helloV3(40, 2)+ helloV3(38,9)}`);
// console.log(`RESULT: ${helloV3(6, 7)+ helloV3(6,7)}`);
// console.log(`RESULT: ${helloV3(6, 3)+ helloV3(9,3)}`);



// var a1 = 1;
// var a2 = 1;
// const aResult = a1 == a2;
// console.log(`aResult: ${aResult}`);

// var b1 = 1;
// var b2 = 2;
// const bResult = b1 == b2;
// console.log(`bResult ${bResult}`);

// var c1 = 1;
// var c2 = "1";

// const cResultV1 = c1 == c2;
// console.log(`cResultV1: ${cResultV1}`);

// const cResultV2 = c1 === c2;
// console.log(`cResult ${cResultV2}`);

// const dResult = 0 == 1 || 2 == 2;
// const dResult = 0 == 1 && 2 == 2;



// const welcomeuser = (
//     user: string,
//     welcomeFunction:(value: string) => void,
// ): void => {
//     console.log(`DEBUG: we got user - ${user}`);

//     welcomeFunction(user);
// }

// welcomeuser("John", (value: string): void => console.log(`ABC: ${value}`));
// welcomeuser("John", (value: string): void => console.log(`XYZ: ${value}`));

// const users =["Nikita", "Artem", "Ivan"];
// users.forEach((value: string) =>{
//     console.log(`Name: ${value}`);
// });

// const updatedUsers = users.map((value: string):string =>{
//     return `NAME: ${value}`
// });

// const userslance = users.filter((value:string) => value.length <= 4 );

// console.log(users);
// console.log(updatedUsers);
// console.log(userslance);



//08.10----------------------------------------------------------------------------------------------------------------------------------

// const demoFunctions=(
//     plus: (a: number, b:number) => number,
//     minus: (a: number, b:number) => number,
//     divide: (a: number, b:number) => number,
//     multiply: (a: number, b:number) => number,
// ): number =>{
//     const a = 10;
//     const b = 52;

//     return plus(a,b) + minus(a,b) + divide(a,b) + multiply(a,b);
// }
// const result = demoFunctions(
//     (a,b)=>(a + b),
//     (a,b)=>(a - b),
//     (a,b)=>(a / b),
//     (a,b)=>(a * b)
// )
//console.log(result);



// const users = ['Maksim', 'Ivan', 'Anton', 'GLEBASIK'];
// const resultat = users
//  .filter(value => value.length >4)
//  .map(value => value.toUpperCase())
//  .map((value,index) =>({
//     id: index,
//     value,
//     tasks: value.split('').map((item,index)=> `#${index + 1} ${item}`)
//  }))
//  .filter(item => item.id % 2 === 0)
//  .forEach(item =>console.log(item)) // .forEach(console.log)

//  console.log(resultat);


//14.10------------------------------------------------------------------------------------------------------------------------------

// type RoleType = 'Teacher' | "Student";
// type User = {
//    id: number;
//    title: string;
//    role: RoleType;
// };
// type Subjects={
//     id: number;
//     title: string;
// };

// class Collage{
//    id: number;
//    title:string;
//    users:User[];
//    subjects: Subjects[] = [];

//    constructor(id:number,title:string){
//    this.id=id; 
//    this.title= title;
//    this.users=[];
//    this.subjects=[];
//    }

//    findUserById(id: number): User | undefined {
//       const allUsers = [...this.users];
//       return allUsers.find(user => user.id === id);
//    }

//   addUser(user: User): void {
//       this.users.push(user);
//   }
//    removeUserById(id: number): void {
//     this.users = this.users.filter(users => users.id !== id);
//   }
//    clearUsers(): void {
//     this.users = [];
//   }
//   listTeachers(){
//    return this.users.filter(user => user.role === 'Teacher');
//   }
//   listStudents(){
//    return this.users.filter(user => user.role === 'Student');
//   };
//   listUsersByRole(role: RoleType): User[] {
//    return this.users.filter(user => user.role === role);
//   }
// }

// const nke = new Collage(1, 'NKE');
// const npk = new Collage(2, "NPK");

// nke.addUser({id: 13, title: "Cheremuha", role: 'Teacher'});
// nke.addUser({id: 21, title: "Chucha", role: 'Student'});
// nke.findUserById(13);
// nke.removeUserById(21);
// //nke.clearUsers();

// npk.addUser({id: 1, title: 'Megamozg', role: "Teacher"});
// npk.addUser({id: 2, title: 'Ponchik', role: 'Student'});
// npk.clearUsers();

// console.log(nke, npk, nke.findUserById(13));
// console.log(nke.listStudents,nke.listTeachers,nke.listUsersByRole('Student'));



// 16.10----------------------------------------------------------------------------------------------------

class DocumentItem{
   public id: number;
   public title: string;
   public content: string;
   public author: string;
   public releaseDate: Date;

   constructor(id:number, title:string, content:string, author:string, releaseDate:Date){
      this.id = id;
      this.title= title;
      this.content=content;
      this.author=author;
      this.releaseDate = new Date(releaseDate);
   }
   print(): void {
    console.log({
      id: this.id,
      title: this.title,
      author: this.author,
      releaseDate: this.releaseDate.toISOString(),
    });
  }
}

class DocumentRepository{
   public readonly documents: DocumentItem[];

   constructor(documents: DocumentItem[] = []) {
    this.documents = [...documents];
  }

   findById(id: number): DocumentItem | undefined {
    return this.documents.find(doc => doc.id === id);
  }
   findByAuthor(author: string): DocumentItem[] {
      return this.documents.filter(doc => doc.author === author);
  }
   save(document: DocumentItem): void {
    this.documents.push(document);
  }
   deleteById(id: number): boolean{
      const index = this.documents.findIndex(doc => doc.id === id);
      if (index === -1) return false;
      this.documents.splice(index, 1);
      return true;
  }
   update(id: number, updatedDoc: DocumentItem) {

  }
   printAll(): void {
      this.documents.forEach(doc => doc.print());
  }
   clear(): void {
      this.documents.splice(0, this.documents.length);
  }
}

class Application{
   public readonly documents: DocumentRepository;

   constructor(){
      this.documents=new DocumentRepository;
   }

}

const application = new Application();

application.documents.save(new DocumentItem(1,'Little Malchik','...','Cheburek', new Date(1876, 9, 23)));
application.documents.save(new DocumentItem(6,'Blinchiki so sgushenkoy','hochu domoy','Shopoklak', new Date(2026, 4, 13)));
application.documents.save(new DocumentItem(7,'Ponchik','hochu domoy','Shopoklak', new Date(2026, 9, 21)));
application.documents.save(new DocumentItem(7,'Ponchik','hochu domoy','Shopoklak', new Date(2026, 9, 21)));

console.log(application.documents.findById(1));
console.log(application.documents.findByAuthor('Shopoklak'));