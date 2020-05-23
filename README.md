# CURSO JAVASCRIPT AVANÇADO OBJETOS E FUNÇÕES

https://academy.especializati.com.br/curso/javascript-avancado-objetos-funcoes

APRENDA A TRABALHAR COM ORIENTAÇÃO A OBJETOS NO JAVASCRIPT, GANHE PRODUTIVIDADE EXPLORANDO DA FORMA CORRETA ESSES RECURSOS DA LINGUAGEM JS.

## <a name="indice">Índice</a>

1. [01 - Introdução a O.O. JS](#parte1)     
2. [02 - JavaScript O.O. na Prática](#parte2)     
---


## <a name="parte1">1 - 01 - Introdução a O.O. JS</a>

#### 01 - Apresentação Curso de JavaScript O.O. 


#### 02 - O que é JavaScript O.O.


#### 03 - Ferramentas Necessárias Curso de JavaScript O.O.


#### 04 - Preparar Projeto Curso de JavaScript O.O.



[Voltar ao Índice](#indice)

---


## <a name="parte2">2 - 02 - JavaScript O.O. na Prática</a>

#### 01 - Objetos em JavaScript

```js
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


```

#### 02 - Orientação a Objetos com ES5

```js
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
```

#### 03 - Orientação a Objetos com ES6

```js
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
```

#### 04 - JavaSript O.O. Herança ES5

```js
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
Super Ação Web Startup Web
* */
```

#### 05 - JavaSript O.O. Herança ES6

```js
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

```

#### 06 - JavaScript O.O. Polimorfismo ES5

```js
function Pessoa(name, lastName) {
    this.name = name;
    this.lastName = lastName;

    this.showInfo = function () { // <<<<<<<<<<<<----------------------------------------
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
    this.showInfo = function () {  // <<<<<<<<<<<<----------------------------------------
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
```

#### 07 - JavaScript O.O. Polimorfismo Desafio

```js
function Conta(numero, titular) {
    this.numero = numero;
    this.saldo = 0;
    this.tutular = titular;

    this.deposita = function (valor) {
        this.saldo += valor;
    }

    this.getSaldo = function () {
        return this.saldo;
    }
}

function ContaCorrente(numero, titular) {
    Conta.call(this, numero, titular);
    this.deposita = function (valor) {
        this.saldo += (valor - 2);
    }
}

function ContaPoupanca(numero, titular) {
    Conta.call(this, numero, titular);
}

var jose = new ContaCorrente(123, "José Malcher Jr.");
console.log(jose.getSaldo()); // 0
jose.deposita(200);
console.log(jose.getSaldo()); // 198

```

#### 08 - JavaScript O.O. Polimorfismo ES6


#### 09 - Propriedades Privadas ES5


#### 10 - Propriedades Privadas ES6


#### 11 - Métodos Estáticos ES5


#### 12 - Métodos Estáticos ES6



[Voltar ao Índice](#indice)

---

