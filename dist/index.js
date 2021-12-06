"use strict";
//1
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getFirstWord(a) {
    return a.split(/ +/)[0].length;
}
console.log(getFirstWord("Hello world!"));
function getUserNamings(a) {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}
console.log(getUserNamings({ name: "Bogdan", surname: "Gryshin" }));
function getAllProductNames(a) {
    var _a;
    return ((_a = a === null || a === void 0 ? void 0 : a.products) === null || _a === void 0 ? void 0 : _a.map((prod) => prod === null || prod === void 0 ? void 0 : prod.name)) || [];
}
const test_products = {
    products: [{ name: "Coca-cola" }, { name: "Milk" }],
};
console.log(getAllProductNames(test_products));
class examplePet {
    constructor(name) {
        this.naming = name;
    }
    name() {
        return this.naming;
    }
}
class Cat extends examplePet {
    constructor(name, isNice) {
        super(name);
        this.isNice = isNice;
    }
}
class Dog extends examplePet {
    constructor(name, countFood) {
        super(name);
        this.countFood = countFood;
    }
}
function hey(a) {
    if (a instanceof examplePet || a.type === undefined) {
        return "hey! i'm " + a.name();
    }
    else {
        return ("hey! i'm " + a.name() + (a.type === "cat" ? ` (cuteness: ${a.cuteness})` : ` (coolness: ${a.coolness})`));
    }
}
let a = new Cat("myavchik", true);
let b = new Dog("gavchik", 333);
console.log(hey(a));
console.log(hey(b));
console.log(hey({ name: () => "roma", type: "cat", cuteness: 100 }));
console.log(hey({ name: () => "vasya", type: "dog", coolness: 100 }));
//5
function stringEntries(a) {
    return Array.isArray(a) ? a : Object.keys(a);
}
console.log(stringEntries([30000, 4343, 3211, 33]));
console.log(stringEntries(["Hello World!"]));
console.log(stringEntries({ name: "Coca-cola", second_name: "Milk" }));
//6
function world(a) {
    return __awaiter(this, void 0, void 0, function* () {
        return "*".repeat(a);
    });
}
const hello = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield world(10);
});
hello().then(r => console.log(r)).catch(e => console.log("fail"));
