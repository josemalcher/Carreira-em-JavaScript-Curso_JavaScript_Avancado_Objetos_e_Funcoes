class Pessoa {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    showInfo() {
        return `${this.name} ${this.lastName}`;
    }
}

class Pfisica extends Pessoa{

    constructor(name, lastName, cpf) {
        super(name, lastName);
        this.cpf = cpf;
    }
}

let pessoa1 = new Pfisica("José ", "Malcher", 987654321);
console.log(pessoa1)
console.log(pessoa1.showInfo());

class PJuridica extends Pessoa{

    constructor(name, lastName, cnpf) {
        super(name, lastName);
        this.cnpf = cnpf;
    }
}

let emrpesa = new PJuridica("Empresa 01", "LTDA", 12345678);
console.log(emrpesa);
console.log(emrpesa.showInfo());
/*
PJuridica {name: "Empresa 01", lastName: "LTDA", cnpf: 12345678}
Empresa 01 LTDA
* */

class PJuridica2 extends Pessoa{

    constructor(name, lastName) {
        super(name, lastName);
    }
    setCnpj(cnpj){
        this.cnpj = cnpj;
    }

    getCnpj() {
        return this.cnpj;
    }
}
let emrpesa_2 = new PJuridica2("Empresa 01", "LTDA");
emrpesa_2.setCnpj(5558887777);
console.log(emrpesa_2);
console.log(emrpesa_2.getCnpj());
console.log(emrpesa_2.showInfo());
/*
PJuridica2 {name: "Empresa 01", lastName: "LTDA", cnpj: 5558887777}
5558887777
Empresa 01 LTDA
* */
