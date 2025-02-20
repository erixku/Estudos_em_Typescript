"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//1. Exemplo de decorator
function myDecorator() {
    console.log("Iniciando Decorator");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("Testing");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
//2. Múltiplos decorators
function a() {
    return function (target, propertKey, descriptor) {
        console.log("Executou A");
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log("Executou B");
    };
}
class MultipleDecorators {
    testing() {
        console.log("Terminando a Execução");
    }
}
__decorate([
    a(),
    b()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
//3. Decorator de Classe
function classDecorator(constructor) {
    console.log(constructor);
    if (constructor.name == "User") {
        console.log("Criando Usuário");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const erick = new User("Erick");
console.log(erick);
//4. Decorator de Método
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
//5. Acessor decorator - para getters e setters
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
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
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const book = new Book(12);
const pen = new Pen(144);
console.log(book);
console.log(pen);
