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

//5. Keyof Type Operator - Podemos criar novos tipos, até mesmo com base em objetos ou suas chaves
type Character = {name: string, age: number, hasDriveLicense: boolean};

type C = keyof Character;

function showCharName(obj: Character, key: C):string {
    return `${obj[key]}`;
}

const myChar: Character = {
    name: "Erick",
    age: 19,
    hasDriveLicense: false
}

//console.log(showCharName(myChar, 'name'));

//6. Typeof Type Operator - mesmo do Keyof, porém agora com tipos
const userName: string = "Erick";
const username2: typeof userName = "Naju";

type x = typeof userName;
const userName3: x = "Lana";

//7. Indexed Access Type - cria um tipo baseado em uma chave específica de um objeto
type Truck = {km: number, kg: number, description: string};
type Km = Truck["km"];

const newTruck: Truck = {
    km: 100000,
    kg: 2000,
    description: "Caminhão para pouca carga"
}
function showKm(km: Km) {
    console.log(`O veículo tem a Km de ${km}`);
}
//showKm(newTruck.km);

//8. Conditional Type - Cria um tipo baseado em uma condição
interface A {};
interface B extends A {};
interface Teste {
    showName(): string;
}

type myType = B extends A ? number : string;
type myTipeB = Teste extends {showNumber(): number} ? string : boolean;

const someVar: myType = 5
const someVar2: myTipeB = true;

//9. Template Literals Type - Criação com Template Literals, o tipo que só aceita o que ele possuir
type testeA = "text";
type customType = `some ${testeA}`;

const testing: customType = "some text";

type a1 = "Testando";
type a2 = "Union";
type a3 = `${a1}` | `${a2}`;