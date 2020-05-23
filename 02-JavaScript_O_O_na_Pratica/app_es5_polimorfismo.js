function Pessoa(name, lastName) {
    this.name = name;
    this.lastName = lastName;

    this.showInfo = function () {
        return `${this.name} ${this.lastName}`;
    };
}

function Pfisica(name, lastName, cpf) {
    Pessoa.call(this, name, lastName);
    this.cpf = cpf;
}
function PJuridica(name, lastName, cnpj) {
    Pessoa.call(this, name, lastName);
    this.cnpj = cnpj;
    this.showInfo = function () {
        return `Empresa: ${this.name} ${this.lastName} - ${this.cnpj}`;
    };
}

var jose = new Pfisica("Jose", "Malcher jr", 123123123);
console.log(jose);
console.log(jose.showInfo());
/*
Pfisica {name: "Jose", lastName: "Malcher jr", cpf: 123123123, showInfo: ƒ}
Jose Malcher jr
* */


var empresa = new PJuridica("Super Ação Web", "Startup Web", 123456789999);
console.log(empresa);
console.log(empresa.showInfo());
/*
PJuridica {name: "Super Ação Web", lastName: "Startup Web", cnpj: 123456789999, showInfo: ƒ}
Empresa: Super Ação Web Startup Web - 123456789999
* */