//1. Tipo de função: Void
function withoutReturn():void {
    console.log("Esta função não possui um retorno")
}

//2. Callback como argumentos
function greeting(name:string) {
    return `Olá ${name}`;
}

function preGreeting(f: (name:string) => string, userName:string) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}

//3. Generic functions - retorno de função relacionado ao tipo de argumento
function firstElement<T>(arr: T[]): T {
    return arr[0];
}

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "Erick"}, {age: 19, job: "Analyst"});

//4. Constraint nas funções genéricas - limitação nos tipos de dados que podem entrar em um genérico
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T;

    if(+a > +b) {
        biggest = a;
    } else {
        biggest = b;
    }

    return biggest;
}

//5. Definindo tipos de parâmetros
function mergeArrays<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2);
}

//6. Parâmetros opcionais
function modernGreeting(name: string, greet?: string) {
    if(greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }

    return `Olá ${name}, tudo bem?`;
}

//7. Parâmetros default - Já possuem um valor pré-definido de segurança
function somaDefault(n: number, m = 10) {
    return n+m;
}
//mesmo que parâmetro já eteja definido, se passarmos um novo valor como parâmetro, ele substituirá o default

//8. Tipo Unknown - não permite que seja executado se não houver validação de tipo
function doSomething(x: unknown) {
    if(Array.isArray(x)) {
        console.log(x[0]);
    } else if (typeof x === "number") {
        console.log("X é um número");
    }
}

//9. Tipo Never - semelhante ao Void, porém é utilizado quando a função não retorna nada, por exemplo: erros
function showErrorMessage(msg: string): never {
    throw new Error(msg);
}

//10. Parâmetros e Operadores Rest
function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number);
}

//11. Destructuring em parâmetros - determina o tipo de cada item de um array
function  showProductDetails({name, price}: {name: string, price: number}): string {
    return `O nome do produto é ${name} e seu preço é ${price}`;
}

const shirt = {name: "Camiseta", price: 49.90};