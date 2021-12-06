//1

function getFirstWord(a: string): number {
    return a.split(/ +/)[0].length;
}

console.log(getFirstWord("Hello world!"))

//2
type UserName = {
    name: string,
    surname: string
}

type UserInitials = {
    fullname: string,
    initials: string
}


function getUserNamings(a: UserName): UserInitials {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}

console.log(getUserNamings({name: "Bogdan", surname: "Gryshin"}))

//3
type product_name = {
    name: string;
};
type product_list = {
    products: product_name[];
};
function getAllProductNames(a?: product_list): any[] {
    return a?.products?.map((prod) => prod?.name) || [];
}

const test_products: product_list = {
    products: [{ name: "Coca-cola" }, { name: "Milk" }],
};

console.log(getAllProductNames(test_products));

//4
interface nameInterface {
    name: () => string;
    cuteness?: number | boolean;
    coolness?: number;
    type?: string;
}
class examplePet {
    naming: string;
    constructor(name: string) {
        this.naming = name;
    }
    name() {
        return this.naming;
    }
}

class Cat extends examplePet {
    isNice: boolean;
    constructor(name: string, isNice: boolean) {
        super(name);
        this.isNice = isNice;
    }
}
class Dog extends examplePet {
    countFood: number;
    constructor(name: string, countFood: number) {
        super(name);
        this.countFood = countFood;
    }
}

function hey(a: nameInterface | examplePet): string {
    if (a instanceof examplePet || a.type === undefined) {
        return "hey! i'm " + a.name();
    } else {
        return (
            "hey! i'm " + a.name() + (a.type === "cat" ? ` (cuteness: ${a.cuteness})` : ` (coolness: ${a.coolness})`)
        );
    }
}

let a = new Cat("myavchik", true);
let b = new Dog("gavchik", 333);

console.log(hey(a));
console.log(hey(b));

console.log(hey({ name: () => "roma", type: "cat", cuteness: 100 }));
console.log(hey({ name: () => "vasya", type: "dog", coolness: 100 }));

//5
function stringEntries(a: {} | []) {
    return Array.isArray(a) ? a : Object.keys(a)
}

console.log(stringEntries([30000,4343,3211,33]));
console.log(stringEntries(["Hello World!"]));
console.log(stringEntries({ name: "Coca-cola" , second_name: "Milk" }));

//6
async function world(a: number) {
    return "*".repeat(a)
}
const hello = async () => {
    return await world(10)
}
hello().then(r => console.log(r)).catch(e => console.log("fail"))