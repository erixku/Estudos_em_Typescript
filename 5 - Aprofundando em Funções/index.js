var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//1. Tipo de função: Void
function withoutReturn() {
    console.log("Esta função não possui um retorno");
}
//2. Callback como argumentos
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    var greet = f(userName);
    console.log(greet);
}
//3. Generic functions - retorno de função relacionado ao tipo de argumento
function firstElement(arr) {
    return arr[0];
}
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = mergeObjects({ name: "Erick" }, { age: 19, job: "Analyst" });
//4. Constraint nas funções genéricas - limitação nos tipos de dados que podem entrar em um genérico
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
//5. Definindo tipos de parâmetros
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
//6. Parâmetros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return "Ol\u00E1 ".concat(greet, " ").concat(name, ", tudo bem?");
    }
    return "Ol\u00E1 ".concat(name, ", tudo bem?");
}
//7. Parâmetros default - Já possuem um valor pré-definido de segurança
function somaDefault(n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
}
//mesmo que parâmetro já eteja definido, se passarmos um novo valor como parâmetro, ele substituirá o default
//8. Tipo Unknown - não permite que seja executado se não houver validação de tipo
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um número");
    }
}
//9. Tipo Never - semelhante ao Void, porém é utilizado quando a função não retorna nada, por exemplo: erros
function showErrorMessage(msg) {
    throw new Error(msg);
}
//10. Parâmetros e Operadores Rest
function sumAll() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (number, sum) { return sum + number; });
}
console.log(sumAll(1, 2, 3, 4));
