var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1. Campos em Classes - Propriedades de objetos
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
//A esclamação foi utilizada para sinalizar que iremos inicializar um valor à propriedade em algum momento
var erick = new User();
erick.name = 'Erick';
//console.log(erick);
//2. Constructor - inicializar uma propriedade com um valor
var NewUser = /** @class */ (function () {
    function NewUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return NewUser;
}());
var naju = new NewUser('Naju', 25);
console.log(naju);
//3. Propriedades Readonly - propriedade de somente consulta
var Car = /** @class */ (function () {
    function Car(name) {
        this.wheels = 4;
        this.name = name;
    }
    return Car;
}());
var fusca = new Car("Fusca");
//4. Herança e Super
var Machine = /** @class */ (function () {
    function Machine(name) {
        this.name = name;
    }
    return Machine;
}());
var trator = new Machine("Trator");
var KillerMachine = /** @class */ (function (_super) {
    __extends(KillerMachine, _super);
    function KillerMachine(name, guns) {
        var _this = _super.call(this, name) || this;
        _this.guns = guns;
        return _this;
    }
    return KillerMachine;
}(Machine));
var destroyer = new KillerMachine("Destroyer", 4);
//5. Métodos
var Combatente = /** @class */ (function () {
    function Combatente(name) {
        this.name = name;
    }
    Combatente.prototype.greeting = function () {
        console.log("Eai mano, beleza?");
    };
    return Combatente;
}());
var lana = new Combatente("Lana");
lana.greeting();
//6. This
