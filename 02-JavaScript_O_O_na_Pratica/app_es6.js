class Pessoa {
    constructor(name, lastName) {
        console.log("Contrutor Pessoa");
        this.name = name;
        this.lastName = lastName;
    }
    fullName(){
        return `${this.name} ${this.lastName}`;
    }
}

let pessoa1 = new Pessoa("José", "Malche Jr")
console.log(pessoa1);
console.log(pessoa1.fullName());

/*
Contrutor Pessoa
Pessoa {name: "José", lastName: "Malche Jr"}
José Malche Jr
* */