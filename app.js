var myName = 'Joshua Graham';
// This let is my name
var states = 50;
// This const states the number of states in the USA
var add = (5 + 4);
// This let adds 5 and 4 together
function sayHello() {
    alert('Hello World');
}
sayHello();
function checkAge(name, age) {
    if (age < 21) {
        return console.log("Sorry " + name + ", you aren't old enough to view this page!");
    }
    else {
        return console.log("Welcome to our page " + name);
    }
}
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
var vegies = ['broccoli', 'spinach', 'potatoes'];
for (var i = 0; i < vegies.length; i++) {
    console.log(vegies[i]);
}
;
var pet = {
    'name': 'Mitzi',
    'breed': 'Cat',
};
console.log(pet.name, pet.breed);
var mark = {
    name: 'Mark',
    age: 20,
};
var shayla = {
    name: 'Shayla',
    age: 28,
};
var dylan = {
    name: 'Dylan',
    age: 25,
};
var chad = {
    name: 'Chad',
    age: 17,
};
var anna = {
    name: 'Anna',
    age: 16,
};
var people = [mark, shayla, dylan, chad, anna];
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
;
function getLength(anyWord) {
    console.log(anyWord.length);
    var myWordLength = anyWord.length;
    if (myWordLength % 2 == 0) {
        console.log("The world is even!");
    }
    else {
        console.log("The world is an odd place!");
    }
}
getLength("Hello World");
