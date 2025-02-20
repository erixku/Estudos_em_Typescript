//1. Exemplo de decorator
function myDecorator() {
    console.log("Iniciando Decorator");
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    }
}

class myClass {
    @myDecorator()
    testing() {
        console.log("Testing");
    }
}

const myObj = new myClass();
myObj.testing();

//2. Múltiplos decorators
function a() {
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou A");
    }
}
function b() {
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou B");
    }
}
class MultipleDecorators {
    @a()
    @b()
    testing() {
        console.log("Terminando a Execução");
    }
}
const multiple = new MultipleDecorators();
multiple.testing();

//3. Decorator de Classe
function classDecorator(constructor: Function) {
    console.log(constructor);
    if(constructor.name == "User") {
        console.log("Criando Usuário");
    }
}
@classDecorator
class User {
    name
    constructor(name: string) {
        this.name = name;
    }
}

const erick = new User("Erick");
console.log(erick);

//4. Decorator de Método
function enumerable(value: boolean) {
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    }
}

class Machine {
    name;

    constructor(name: string) {
        this.name = name;
    }
    @enumerable(false)
    showName() {
        console.log(this);
        return `O nome da máquina é ${this.name}`;
    }
}
const trator = new Machine("Trator");
console.log(trator.showName());

//5. Acessor decorator - para getters e setters
class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    @enumerable(true)
    get showName() {
        return `Nome do monstro ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro ${this.age}`;
    }
}

const bulbassaur = new Monster("Bulbassaur", 10);
console.log(bulbassaur);

//6. Property decorator
// function formatNumber() {
//     return function(target: Object, propertyKey: string) {
//         let value: string;
//         let newVal: string;

//         const getter = function() {
//             return value;
//         }
//         const setter = function() {
//             value = value.padStart(5, "0")
//         }
//         Object.defineProperty(target, propertyKey, {
//             set: setter,
//             get: getter,
//         });
//     }
// }
// class ID {
//     @formatNumber()
//     id;

//     constructor(id:string) {
//         this.id = id;
//     }
// }
// const newItem = new ID("1");
// console.log(newItem);

//7. Exemplo real de class decorator
function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}
@createdDate
class Book {
    id;
    createdAt?: Date;

    constructor(id: number) {
        this.id = id;
    }
}
@createdDate
class Pen {
    id

    constructor(id: number) {
        this.id = id;
    }
}

const book = new Book(12);
const pen = new Pen(144);
console.log(book);
console.log(pen);