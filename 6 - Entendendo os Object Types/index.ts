//1. Tipo de objeto para função com interface
interface Product {
    name: string
    price: number
    isAvaliable: boolean
}

function showProductsDetails (product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é ${product.price}`);
    if(product.isAvaliable) {
        console.log("O produto está disponível");
    }
}

const shirt:Product = {
    name: "Camisa",
    price: 49.99,
    isAvaliable: true
}

//showProductsDetails(shirt);

//2. Interface como parâmetro opcional
interface User {
    email: string
    role?: string
}

function showUserDetails(user: User) {
    console.log(`O e-mail do usuário é: ${user.email}`);

    if(user.role) {
        console.log(`A função desse usuário é: ${user.role}`);
    }
}

const u1:User = { email: "erick@outlook.com", role: "técnico" }
const u2:User = { email: "naju@outlook.com" }

//3. Propriedades Readonly - São iniciadas com um valor imutável
interface Car {
    brand: string
    readonly wheels: number
}

const fusca:Car = {
    brand: "VW",
    wheels: 4
}

//4. Assinatura Index - quando não sabemos os nomes das chaves, mas sabemos os seus tipos
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}
coords.y = 15;
//Assim, podemos incrementar um objeto com novas propriedades seguindo os padrões da assinatura index

//5. Extending Types - herança de interfaces
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

//7. Intersection Types - junção de duas interfaces
interface Characeter {
    name: string
}

 interface Gun {
    type: string
    caliber: number
 }

 type HumanWithGun = Characeter & Gun;

 const jhon: HumanWithGun = {
    name: "Jhon Wick",
    type: "Fuzil de Assalto",
    caliber: 0.24
 }

 //7. Readonly Array - array que não pode ser modificado
 let myArray: ReadonlyArray<string> = ["Combatente", "Especialista", "Ocultista"];

 //Ser modificado com o método .map e lido com .forEach
 myArray = myArray.map((item) => {
    return `Fruta: ${item}`
 });

 //8. Tuplas - array que definimos a quantidade e tipo de elementos
 type fiveNumber = [number, number, number, number, number];
 const myNumberArray: fiveNumber = [1, 2, 3, 4, 5];

 type nameAndAge = [string, number];
 const otherUser: nameAndAge = ["Erick", 19];

 //9. Tuplas com Readonly
 function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0]);
    console.log(numbers[1]);
 }