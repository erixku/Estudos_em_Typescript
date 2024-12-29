/*
Arquivo para o aprofundo em tipos de dados em Typescript
*/

//Arrays
//A criação de arrys é determinada a partir dos colchetes que vem logo a seguir do tipo de dados
let numeros: number[] = [1, 2, 3];

//É possível utilizar métodos comuns de arrays com as variáveis do tipo
numeros.push(5);
console.log(numeros[3]);

const nomes: string[] = ["Erick", "Gustavo", "Lucas"];
nomes.push("Naju");
console.log(nomes);

//A criação de arrays possui uma outra sintaxe menos utilizada, sendo da seguinte forma: "Array<number>"
//Dessa maneira, estamos implementando uma INTERFACE de Array
const numero: Array<number> = [100, 200, 300];
numero.push(900);
console.log(numero);

//Qualquer - any
//Qualquer tipo de dado satisfaz a variável, ou seja, vai contra a tipagem de uma variável
const arr1: any = [1, "teste", true, [], {nome:"Erick"}];
console.log(arr1);

//Tipando parâmetros de uma função
function criacaoNome(nome: string, sobrenome: string){
    console.log(nome + " " + sobrenome);
}

criacaoNome("Erick", "Gomes Barbosa");

//Tipando o retorno de uma função
function boasVindas(nome: string): string{
    return `Olá ${nome}`;
}
console.log(boasVindas("Erick"));

//Funções anônimas
setTimeout(function(){
    const salario: number = 1000;
    //console.log(salario);
}, 2000)

//Tipos de objetos
function passarCoordenadas(coord: {x: number, y: number}){
    console.log("Coordenadas X: " + coord.x);
    console.log("Coordenadas Y: " + coord.y);
}

const objetoCoordenada = {x: 329, y: 23.4};
passarCoordenadas(objetoCoordenada);

const objPessoa: {nome: string, sobrenome: string} = {nome:"Erick", sobrenome:"Gomes Barbosa"};

//Propriedades opcionais de objetos
function mostrarNumeros(a: number, b:number, c?:number){
    console.log("A: " + a);
    console.log("B: " + b);
    if(c){
        console.log("C: " + c);
    }
}

mostrarNumeros(10, 20, 30);
mostrarNumeros(1, 2);

//Validação de propiedades opcionais
function cumprimentoAvancado(primeiroNome: string, ultimoNome?: string) {
    if(ultimoNome !== undefined) {
        return console.log(`Olá ${primeiroNome} ${ultimoNome}`);
    }

    return console.log(`Olá ${primeiroNome}, de boa?`);
}

cumprimentoAvancado("Erick", "Gomes");
cumprimentoAvancado("Naju");

//Unindo tipos de dados
function mostrarBalanco(balanco: string | number) {
    console.log(`O saldo da conta é R$${balanco}`);
}

mostrarBalanco("500");
mostrarBalanco(100);

const arr2: Array<string | number | boolean> = ["Erick", 100, true];

//Condicionais nas uniões de tipos
function mostrarPapelAluno(role: boolean | string){
    if(typeof role === "boolean"){
        return "Aluno não aprovado!"
    }

    return `O papel do aluno é: ${role}`;
}

console.log(mostrarPapelAluno(false));
console.log(mostrarPapelAluno("Especial"));

//Alias - resumo de uma união de tipos
type ID = string | number;

function mostrarId(id: ID) {
    console.log(`O ID é: ${id}`);
}

mostrarId("100");
mostrarId(200);

//Interfaces
interface Ponto {
    x: number
    y: number
    z: number
}

function mostrarCoordenadas(obj: Ponto) {
    console.log(`X: ${obj.x}\nY: ${obj.y}\nZ: ${obj.z}`);
}

const coordenadasObjeto: Ponto = {
    x: 15,
    y: 20,
    z: 30
}

mostrarCoordenadas(coordenadasObjeto);

//Interface × Alias
/**
 * A principal diferença entre Interface e Alias se baseia na flexibilidade da interfacem que pode ser alterada, diferente do Alias
 * que a partir do momento de sua criação, não pode ser alterado
 */
interface Pessoa {
    nome: string
}
interface Pessoa {
    idade: number
}

const alguem: Pessoa = {nome:"Erick", idade:19};

//Tipos literais
let teste: "Testando";
teste = "Testando";
console.log(teste);

//Non-null Assertion Operator - Operador de Assersão Não-Nula
const p = document.getElementById("some-p");

console.log(p!.innerText);

//BigInt
let n: bigint

//n = 1;
n = 1000n;
console.log(n);
console.log(typeof n);

//Simbolo - Symbol: torna um valor de uma variável único
let simboloA: symbol = Symbol("a");
let simboloB = Symbol("a");

console.log(simboloA == simboloB);
console.log(simboloA === simboloB);