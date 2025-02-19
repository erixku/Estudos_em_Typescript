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
//lana.greeting();

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
class Base {
    someMethod() {
        console.log("something");
    }
}
class Nova extends Base {
    someMethod(): void {
        console.log("testing other thing");
    }
}
const myObject = new Nova();
//myObject.someMethod();

//11. Visibilidade de Métodos e Propriedades - Parte do Encapsulamento
//  11.a. Visibilidade Public
class C {
    public x = 10;
}
class D extends C {
}
const cInstance = new C();
const dInstance = new D();
//console.log(cInstance.x);
//console.log(dInstance.x);

//  11.a. Visibilidade Protected
class E {
    protected x = 10;

    protected protectedMethod() {
        console.log("Esse método é protegido");
    }
}
class F extends E {
    showX() {
        console.log("x: " + this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
//console.log(fInstance.x); - Como o atributo X é protegido, é necessário um método para acessa-lo mesmo sendo uma classe filha
//fInstance.showX();
//fInstance.showProtectedMethod(); - O mesmo vale para métodos protegidos

//  11.c. Visibilidade Private
class PrivateClass {
    private name = "Private";

    showName() {
        return this.name;
    }
    private privateMethod() {
        console.log("Método Privado");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
class TestingPrivate extends PrivateClass {
    myMethod() {
        //this.privateMethod(); - Como o PrivateClass possui métodos privados, nem mesmo as suas classes filhas podem acessar de maneira nenhuma, apenas por meio de métodos internos da PrivateClass
    }
}
const pObj = new PrivateClass();
//console.log(pObj.name); - Como o nome é privado, ele não pode acessar, é preciso um método a parte para utilizá-lo
//console.log(pObj.showName());

//12. Membros Estáticos - Faz com que o uso de um método/propriedade não dependa de uma instância
class StaticMembers {
    static prop = "testStatic";

    static staticMethod() {
        console.log("Esse método é estático");
    }
}
//console.log(StaticMembers.prop);
//StaticMembers.staticMethod();

//13. Classes Genéricas - Classes com tipos genéricos
class Item<T, U> {
    first;
    second;

    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }
}

const newItem = new Item("Caixa", "surpresa");
//console.log(newItem);
const secondItem = new Item(12, true);
//console.log(typeof secondItem.first);
//console.log(typeof secondItem.second);

//14. Propriedades de Parâmetros
class ParameterProperties {
    constructor (public name: string, private qty: number, private price: number) {
        this.name = name;
        this.qty = qty;
        this.price = price;
    }

    get showQty() {
        return this.qty;
    }
    get showPrice() {
        return this.price;
    }
}
const newShirt = new ParameterProperties("Camisa", 5, 19.99);
//console.log(newShirt.name);
//console.log(newShirt.showPrice);
//console.log(newShirt.showQty);

//15. Expressões de Classe - Cria uma classe anônima com genéricas, encapsulando uma classe em uma variável
const myClass = class<T> {
    name;

    constructor(name: T) {
        this.name = name;
    }
}

const pessoa = new myClass("Erick");

//16. Classe Abstrata - Molde de outras classes, todos os seus métodos devem ser aplicados em classes que a herdam, e não se pode instanciar objetos dela
abstract class AbstractClass {
    abstract showName(): void;
}
class AbstractExample extends AbstractClass {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    showName(): void {
        console.log(`O nome é ${this.name}`);
    }
}

//17. Relação entre classes
class Dog {
    name!: string;
}
class Cat {
    name!: string;
}

const doguinho: Dog = new Cat();
