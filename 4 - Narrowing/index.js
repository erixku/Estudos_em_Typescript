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
//1. Type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a soma");
    }
}
//2. Checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            var sum_1 = arr.reduce(function (i, total) { return i + total; });
            console.log(sum_1);
        }
        else if (operation === "multiply") {
            var multiply = arr.reduce(function (i, total) { return i * total; });
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor, defina uma operação");
    }
}
//3. Instance of
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var Superuser = /** @class */ (function (_super) {
    __extends(Superuser, _super);
    function Superuser(name) {
        return _super.call(this, name) || this;
    }
    return Superuser;
}(User));
var jhon = new User("jhon");
var paul = new Superuser("paul");
function userGreetings(user) {
    if (user instanceof Superuser) {
        console.log("Ol\u00E1 ".concat(user.name, ", gostaria de ver os dados de nosso sistema?"));
    }
    else if (user instanceof User) {
        console.log("Ol\u00E1 ".concat(user.name));
    }
}
//4. Operador in
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var lessi = new Dog("Lessi");
var kid = new Dog("Kid", "Pinscher");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log("O cachorro ".concat(dog.name, " \u00E9 da ra\u00E7a ").concat(dog.breed));
    }
    else {
        console.log("O cachorro \u00E9 um SRD");
    }
}
showDogDetails(lessi);
showDogDetails(kid);
