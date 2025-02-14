//1. Revisão de Generics
function showData<T>(arg: T): string {
    return `O dado é: ${arg}`;
}

//2. Reduzindo os tipos aceitos em Generics - Constraint
function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é: ${obj.name}`;
}

const Product = {name: "Teclado", color: "Preto"}; //Entra na função pois possui a propriedade "name"
const Product2 = {price: 49.99, category: "Copo"}; //Não entra na função pois não possui a propriedade pedida

//3. Interfaces com Generics
interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar:Car = {name: "Fusca", wheels: 4, engine: 1.0, color: "Branco"};
const myPen:Pen = {name: "Caneta Bic", wheels: false, engine: false, color: "Azul"};

//4. Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K): string {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: "2TB",
    ram: "32GB"
}

//console.log(getSomeKey(server, "ram"));