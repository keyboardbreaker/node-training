function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function() {
    console.log(`Hello, ${this.firstName} ${this.lastName}`);
}

Person.prototype.salut = function() {
    console.log(`I salut you`);
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Smith');
jane.greet();

let phoebe = new Person('Phoebe', 'Josie');
phoebe.salut();

//look at the prototype method
// console.log(john.__proto__);
// console.log(jane.__proto__);
//are they the same prototype object
// console.log(john.__proto__ === jane.__proto__);