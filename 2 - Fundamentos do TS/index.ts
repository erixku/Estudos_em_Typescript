/*
Arquivo para a exemplificação da atribuição de tipos à variáveis no Typescript e suas aplicações
*/

//Numérico - number
let x: number = 10;

console.log(x);
console.log(typeof x);

//Números flutuantes também são consideradas "number"
let y: number = 15.81221;

console.log(y);
console.log(typeof y);
//Com a atribuição do tipo numérico, podemos utilizar alguns de seus métodos
console.log(y.toPrecision(3));

//Texto - string
const primeiroNome: string = "Erick";

console.log(primeiroNome.toUpperCase());

//É uma boa prática ao criarmos uma variável que a principio é vazia já com um tipo
let nomeCompleto: string;

const ultimoNome: string = "Barbosa";

nomeCompleto = primeiroNome + " " + ultimoNome
console.log(nomeCompleto);
console.log(typeof nomeCompleto);

//Booleano - boolean
let a: boolean = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);

//Annotation e Inference
/*
Annotation: quando colocamos um tipo de dado a uma variável manualmente
Inference: quando o Typescript identifica o dado que a variável está recebendo e atribui o tipo à ela
*/
const ann: string = "Teste";
let inf = "Teste"
//Mesmo que mudemos o valor da variável depois de atribuirmos um valor à ela, o TS já definiu o tipo de dado que ela recebe e garante ele até o fim
//inf = 1;

console.log("E agora");