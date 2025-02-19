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
//console.log(naju);
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
//lana.greeting();
//6. This
var Truck = /** @class */ (function () {
    function Truck(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    Truck.prototype.showDetails = function () {
        console.log("Caminh\u00E3o do modelo: ".concat(this.model, ", que tem ").concat(this.hp, " cavalos de pot\u00EAncia"));
    };
    return Truck;
}());
var volvo = new Truck("Volvo", 400);
//volvo.showDetails();
//7. Getters - Método para ler propriedades
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return "".concat(this.name, " ").concat(this.surname);
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var erickGomes = new Person("Erick", "Gomes");
//console.log(erickGomes.fullName);
//8. Setters - Método para alterar uma propriedade
var Coords = /** @class */ (function () {
    function Coords() {
    }
    Object.defineProperty(Coords.prototype, "fillX", {
        set: function (x) {
            if (x === 0) {
                return;
            }
            this.x = x;
            console.log("X inserido com sucesso");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "fillY", {
        set: function (y) {
            if (y === 0) {
                return;
            }
            this.y = y;
            console.log("Y inserido com sucesso");
        },
        enumerable: false,
        configurable: true
    });
    return Coords;
}());
var myCoords = new Coords();
var BlogPosts = /** @class */ (function () {
    function BlogPosts(title) {
        this.title = title;
    }
    BlogPosts.prototype.itemTitle = function () {
        return "O t\u00EDtulo do post \u00E9: ".concat(this.title);
    };
    return BlogPosts;
}());
var myPost = new BlogPosts("Hello World");
//console.log(myPost.itemTitle());
//10. Override de Métodos
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.someMethod = function () {
        console.log("something");
    };
    return Base;
}());
var Nova = /** @class */ (function (_super) {
    __extends(Nova, _super);
    function Nova() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nova.prototype.someMethod = function () {
        console.log("testing other thing");
    };
    return Nova;
}(Base));
var myObject = new Nova();
//myObject.someMethod();
//11. Visibilidade de Métodos e Propriedades - Parte do Encapsulamento
//  11.a. Visibilidade Public
var C = /** @class */ (function () {
    function C() {
        this.x = 10;
    }
    return C;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return D;
}(C));
var cInstance = new C();
var dInstance = new D();
//console.log(cInstance.x);
//console.log(dInstance.x);
//  11.a. Visibilidade Protected
var E = /** @class */ (function () {
    function E() {
        this.x = 10;
    }
    E.prototype.protectedMethod = function () {
        console.log("Esse método é protegido");
    };
    return E;
}());
var F = /** @class */ (function (_super) {
    __extends(F, _super);
    function F() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    F.prototype.showX = function () {
        console.log("x: " + this.x);
    };
    F.prototype.showProtectedMethod = function () {
        this.protectedMethod();
    };
    return F;
}(E));
var fInstance = new F();
//console.log(fInstance.x); - Como o atributo X é protegido, é necessário um método para acessa-lo mesmo sendo uma classe filha
//fInstance.showX();
//fInstance.showProtectedMethod(); - O mesmo vale para métodos protegidos
//  11.c. Visibilidade Private
var PrivateClass = /** @class */ (function () {
    function PrivateClass() {
        this.name = "Private";
    }
    PrivateClass.prototype.showName = function () {
        return this.name;
    };
    PrivateClass.prototype.privateMethod = function () {
        console.log("Método Privado");
    };
    PrivateClass.prototype.showPrivateMethod = function () {
        this.privateMethod();
    };
    return PrivateClass;
}());
var TestingPrivate = /** @class */ (function (_super) {
    __extends(TestingPrivate, _super);
    function TestingPrivate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestingPrivate.prototype.myMethod = function () {
        //this.privateMethod(); - Como o PrivateClass possui métodos privados, nem mesmo as suas classes filhas podem acessar de maneira nenhuma, apenas por meio de métodos internos da PrivateClass
    };
    return TestingPrivate;
}(PrivateClass));
var pObj = new PrivateClass();
//console.log(pObj.name); - Como o nome é privado, ele não pode acessar, é preciso um método a parte para utilizá-lo
//console.log(pObj.showName());
//12. Membros Estáticos - Faz com que o uso de um método/propriedade não dependa de uma instância
var StaticMembers = /** @class */ (function () {
    function StaticMembers() {
    }
    StaticMembers.staticMethod = function () {
        console.log("Esse método é estático");
    };
    StaticMembers.prop = "testStatic";
    return StaticMembers;
}());
//console.log(StaticMembers.prop);
//StaticMembers.staticMethod();
//13. Classes Genéricas - Classes com tipos genéricos
var Item = /** @class */ (function () {
    function Item(first, second) {
        this.first = first;
        this.second = second;
    }
    return Item;
}());
var newItem = new Item("Caixa", "surpresa");
//console.log(newItem);
var secondItem = new Item(12, true);
//console.log(typeof secondItem.first);
//console.log(typeof secondItem.second);
//14. Propriedades de Parâmetros
var ParameterProperties = /** @class */ (function () {
    function ParameterProperties(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    Object.defineProperty(ParameterProperties.prototype, "showQty", {
        get: function () {
            return this.qty;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParameterProperties.prototype, "showPrice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    return ParameterProperties;
}());
var newShirt = new ParameterProperties("Camisa", 5, 19.99);
//console.log(newShirt.name);
//console.log(newShirt.showPrice);
//console.log(newShirt.showQty);
//15. Expressões de Classe - Cria uma classe anônima com genéricas, encapsulando uma classe em uma variável
var myClass = /** @class */ (function () {
    function class_1(name) {
        this.name = name;
    }
    return class_1;
}());
var pessoa = new myClass("Erick");
//16. Classe Abstrata - Molde de outras classes, todos os seus métodos devem ser aplicados em classes que a herdam, e não se pode instanciar objetos dela
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    return AbstractClass;
}());
var AbstractExample = /** @class */ (function (_super) {
    __extends(AbstractExample, _super);
    function AbstractExample(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    AbstractExample.prototype.showName = function () {
        console.log("O nome \u00E9 ".concat(this.name));
    };
    return AbstractExample;
}(AbstractClass));
//17. Relação entre classes
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
var doguinho = new Cat();
