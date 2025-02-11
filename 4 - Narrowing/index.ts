//1. Type guard - verifica se uma variável é de um determinado tipo ou outro
function sum(a: number | string, b: number | string) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a+b);
    } else {
        console.log("Impossível realizar a soma");
    }
}

//2. Checando se valor existe
function operations(arr: number[], operation?: string | undefined) {
    if(operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    } else {
        console.log("Por favor, defina uma operação")
    }
}

//3. Instance of - verifica se um objeto é instância de uma classe específica
class User {
    name

    constructor (name:string) {
        this.name = name;
    }
}
class Superuser extends User {
    constructor (name: string) {
        super(name);
    }
}

const jhon = new User("jhon");
const paul = new Superuser("paul");

function userGreetings(user: object) {
    if (user instanceof Superuser) {
        console.log(`Olá ${user.name}, gostaria de ver os dados de nosso sistema?`);
    } else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}

//4. Operador in - verifica se existe uma propriedade em um objeto ou se ela está preenchida
class Dog {
    name;
    breed;

    constructor(name:string, breed?: string) {
        this.name = name;
        if(breed) {
            this.breed = breed
        }
    }
}

const lessi = new Dog("Lessi");
const kid = new Dog("Kid", "Pinscher");

function showDogDetails (dog: Dog) {
    if('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    } else {
        console.log(`O cachorro é um SRD`);
    }
}