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

