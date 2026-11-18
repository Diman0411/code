import { ApplicationRepository } from "./application.repository";

const application = new ApplicationRepository();


application.users.save(application.users.create("Nikita"));
application.users.save(application.users.create("Ivan"));
application.users.save(application.users.create("Jorik"));

application.books.save(application.books.create('da1',1));
application.books.save(application.books.create('da2',1));
application.books.save(application.books.create('da3',2));

console.log(JSON.stringify(application.users.findAll(),null,2));
console.log(JSON.stringify(application.books.findAll(),null,2));

// application.books.deleteAllByAuthorId(2);
// application.books.deleteById(1);
console.log(JSON.stringify(application.books.findAll(), null, 2));

application.rewiew.save(application.rewiew.create(1,1,"good"));
application.rewiew.save(application.rewiew.create(2,2,"good!!!"));
console.log(JSON.stringify(application.rewiew.findAll(),null,2));