/*
// ES 5
var jose = {
    name: "José",
    lastmame: "Malcher JR",

    fullname: function () {
        return `${this.name} ${this.lastmame}`;

    }
}
console.log(jose.fullname());

var maria = {
    name: "Mariazinha",
    lastmame: "Monteiro",

    fullname: function () {
        return `${this.name} ${this.lastmame}`;

    }
}
console.log(maria.fullname());

var cassandra = {
    name: "Cassandra",
    lastmame: "Lari",

    fullname: function () {
        return `${this.name} ${this.lastmame}`;

    }
}
console.log(cassandra.fullname());
*/
function Pessoa(name, lastName) {
    console.log("Sou o contrutor...");
    this.name = name;
    this.lastName = lastName;

    this.fullName = function () {
        return `${this.name} ${this.lastName}`;
    };
}
var jose = new Pessoa("José", "Malcher JR")
console.log(jose);
console.log(jose.fullName());

/*
Sou o contrutor...
Pessoa {name: "Jose", lastName: "Malcher Jr.", fullName: ƒ}
Jose Malcher Jr.
* */

var pessoa2 = new Pessoa("Maria", "Joaquina")
console.log(pessoa2);
console.log(pessoa2.fullName());

/*
Sou o contrutor...
Pessoa {name: "Maria", lastName: "Joaquina", fullName: ƒ}
Maria Joaquina
* */
