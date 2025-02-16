//1. Campos em Classes - Propriedades de objetos
class User {
    name!: string
    age!: number
}
//A esclamação foi utilizada para sinalizar que iremos inicializar um valor à propriedade em algum momento

const erick = new User();
erick.name = 'Erick';
//console.log(erick);

//2. Constructor - inicializar uma propriedade com um valor
class NewUser {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
const naju = new NewUser('Naju', 25);
//console.log(naju);

//3. Propriedades Readonly - propriedade de somente consulta
class Car {
    name;
    readonly wheels = 4;

    constructor(name: string) {
        this.name = name;
    }
}
const fusca = new Car("Fusca");

//4. Herança e Super
class Machine {
    name;

    constructor(name: string){
        this.name = name;
    }
}
const trator = new Machine("Trator");

class KillerMachine extends Machine {
    guns;

    constructor(name: string, guns:number) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);

//5. Métodos
class Combatente {
    name;
    
    constructor(name:string) {
        this.name = name;
    }

    greeting() {
        console.log(`Eai mano, beleza?`);
    }
}
const lana = new Combatente("Lana");
lana.greeting();

//6. This
class Truck {
    model;
    hp;

    constructor(model: string, hp: number) {
        this.model = model;
        this.hp = hp;
    }

    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck("Volvo", 400);
//volvo.showDetails();

//7. Getters - Método para ler propriedades
class Person {
    name;
    surname;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const erickGomes = new Person("Erick", "Gomes");
//console.log(erickGomes.fullName);

//8. Setters - Método para alterar uma propriedade
class Coords {
    x!: number;
    y!: number;

    set fillX(x: number) {
        if(x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y: number) {
        if(y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
}
const myCoords = new Coords();
//myCoords.fillX = 10;
//myCoords.fillY = 20;

//9. Herdando Interfaces - implementação
interface showTitle {
    itemTitle(): string;
}
class BlogPosts implements showTitle {
    title;

    constructor(title: string) {
        this.title = title;
    }

    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new BlogPosts("Hello World");
//console.log(myPost.itemTitle());

//10. Override de Métodos