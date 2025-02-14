//1. Revisão de Generics
function showData(arg) {
    return "O dado \u00E9: ".concat(arg);
}
//2. Reduzindo os tipos aceitos em Generics - Constraint
function showProductName(obj) {
    return "O nome do produto \u00E9: ".concat(obj.name);
}
var Product = { name: "Teclado", color: "Preto" }; //Entra na função pois possui a propriedade "name"
var Product2 = { price: 49.99, category: "Copo" }; //Não entra na função pois não possui a propriedade pedida
var myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
var myPen = { name: "Caneta Bic", wheels: false, engine: false, color: "Azul" };
//4. Type parameters
function getSomeKey(obj, key) {
    return "A chave ".concat(String(key), " est\u00E1 presente no objeto e tem o valor de ").concat(obj[key]);
}
var server = {
    hd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server, "ram"));
