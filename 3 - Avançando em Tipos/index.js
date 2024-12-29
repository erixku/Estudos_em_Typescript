"use strict";
/*
Arquivo para o aprofundo em tipos de dados em Typescript
*/
//Arrays
//A criação de arrys é determinada a partir dos colchetes que vem logo a seguir do tipo de dados
let numeros = [1, 2, 3];
//É possível utilizar métodos comuns de arrays com as variáveis do tipo
numeros.push(5);
console.log(numeros[3]);
const nomes = ["Erick", "Gustavo", "Lucas"];
nomes.push("Naju");
console.log(nomes);
//A criação de arrays possui uma outra sintaxe menos utilizada, sendo da seguinte forma: "Array<number>"
//Dessa maneira, estamos implementando uma INTERFACE de Array
const numero = [100, 200, 300];
numero.push(900);
console.log(numero);
//Qualquer - any
//Qualquer tipo de dado satisfaz a variável, ou seja, vai contra a tipagem de uma variável
const arr1 = [1, "teste", true, [], { nome: "Erick" }];
console.log(arr1);
//Tipando parâmetros de uma função
function criacaoNome(nome, sobrenome) {
    console.log(nome + " " + sobrenome);
}
criacaoNome("Erick", "Gomes Barbosa");
//Tipando o retorno de uma função
function boasVindas(nome) {
    return `Olá ${nome}`;
}
console.log(boasVindas("Erick"));
//Funções anônimas
setTimeout(function () {
    const salario = 1000;
    //console.log(salario);
}, 2000);
//Tipos de objetos
function passarCoordenadas(coord) {
    console.log("Coordenadas X: " + coord.x);
    console.log("Coordenadas Y: " + coord.y);
}
const objetoCoordenada = { x: 329, y: 23.4 };
passarCoordenadas(objetoCoordenada);
const objPessoa = { nome: "Erick", sobrenome: "Gomes Barbosa" };
//Propriedades opcionais de objetos
function mostrarNumeros(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
mostrarNumeros(10, 20, 30);
mostrarNumeros(1, 2);
//Validação de propiedades opcionais
function cumprimentoAvancado(primeiroNome, ultimoNome) {
    if (ultimoNome !== undefined) {
        return console.log(`Olá ${primeiroNome} ${ultimoNome}`);
    }
    return console.log(`Olá ${primeiroNome}, de boa?`);
}
cumprimentoAvancado("Erick", "Gomes");
cumprimentoAvancado("Naju");
//Unindo tipos de dados
function mostrarBalanco(balanco) {
    console.log(`O saldo da conta é R$${balanco}`);
}
mostrarBalanco("500");
mostrarBalanco(100);
const arr2 = ["Erick", 100, true];
//Condicionais nas uniões de tipos
function mostrarPapelAluno(role) {
    if (typeof role === "boolean") {
        return "Aluno não aprovado!";
    }
    return `O papel do aluno é: ${role}`;
}
console.log(mostrarPapelAluno(false));
console.log(mostrarPapelAluno("Especial"));
function mostrarId(id) {
    console.log(`O ID é: ${id}`);
}
mostrarId("100");
mostrarId(200);
function mostrarCoordenadas(obj) {
    console.log(`X: ${obj.x}\nY: ${obj.y}\nZ: ${obj.z}`);
}
const coordenadasObjeto = {
    x: 15,
    y: 20,
    z: 30
};
mostrarCoordenadas(coordenadasObjeto);
const alguem = { nome: "Erick", idade: 19 };
//Tipos literais
let teste;
teste = "Testando";
console.log(teste);
//Non-null Assertion Operator - Operador de Assersão Não-Nula
const p = document.getElementById("some-p");
console.log(p.innerText);
//BigInt
let n;
//n = 1;
n = 1000n;
console.log(n);
console.log(typeof n);
//Simbolo - Symbol: torna um valor de uma variável único
let simboloA = Symbol("a");
let simboloB = Symbol("a");
console.log(simboloA == simboloB);
console.log(simboloA === simboloB);
