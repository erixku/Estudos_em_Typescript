"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//1. Importação de arquivos
const greet_js_1 = __importDefault(require("./greet.js"));
(0, greet_js_1.default)();
//2. Importação de Variáveis
const variable_js_1 = require("./variable.js");
console.log(variable_js_1.x);
//3. Múltiplas importações
const multiple_1 = require("./multiple");
const multiple_js_1 = __importDefault(require("./multiple.js"));
console.log(multiple_1.a, multiple_1.b);
(0, multiple_js_1.default)();
//4. Alias para importações - Apelidos de itens
const changeName_js_1 = require("./changeName.js");
console.log(changeName_js_1.someName);
//5. Importando diversos itens
const myNumbers = __importStar(require("./numbers.js"));
console.log(myNumbers);
const nx = myNumbers.n1;
console.log(nx);
myNumbers.showNumbers();
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const erick = new User("Erick", 19);
console.log(erick);
