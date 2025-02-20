//1. Importação de arquivos
import importGreet from "./greet.js";

importGreet();

//2. Importação de Variáveis
import { x } from "./variable.js"
console.log(x);

//3. Múltiplas importações
import { a, b } from "./multiple";
import myFunction from "./multiple.js"
console.log(a, b);
myFunction();

//4. Alias para importações - Apelidos de itens
import { someName as name } from "./changeName.js";
console.log(name);

//5. Importando diversos itens
import * as myNumbers from "./numbers.js";
console.log(myNumbers);
const nx = myNumbers.n1;
console.log(nx);
myNumbers.showNumbers();

//6. Importando tipos ou interfaces
import { Human } from "./myType.js";
class User implements Human {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
const erick = new User("Erick", 19);
console.log(erick);