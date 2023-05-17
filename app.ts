let myName: string = 'Joshua Graham';
// This let is my name
const states: number = 50;
// This const states the number of states in the USA
let add: number = (5 + 4);
// This let adds 5 and 4 together

function sayHello() {
    alert('Hello World');
}
sayHello();

function checkAge(name: string, age: number) {
    if (age < 21) {
        return console.log("Sorry " + name + ", you aren't old enough to view this page!");
    } else {
        return console.log("Welcome to our page " + name)
    }
}
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let vegies: string[] = ['broccoli', 'spinach', 'potatoes'];

for (let i = 0; i < vegies.length; i++) {
    console.log(vegies[i]);
};

let pet: { name: string, breed: string } = {
    'name': 'Mitzi',
    'breed': 'Cat',
};

console.log(pet.name, pet.breed);

let mark: { name: string, age: number } = {
    name: 'Mark',
    age: 20,
};

let shayla: { name: string, age: number } = {
    name: 'Shayla',
    age: 28,
};

let dylan: { name: string, age: number } = {
    name: 'Dylan',
    age: 25,
};

let chad: { name: string, age: number } = {
    name: 'Chad',
    age: 17,
};

let anna: { name: string, age: number } = {
    name: 'Anna',
    age: 16,
};


let people = [mark, shayla, dylan, chad, anna];

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
};

function getLength(anyWord) {
    console.log(anyWord.length);
    let myWordLength = anyWord.length;
    if (myWordLength % 2 == 0o0) {
        console.log("The world is even!");
    } else {
        console.log("The world is an odd place!");
    }
}
getLength("Hello World");