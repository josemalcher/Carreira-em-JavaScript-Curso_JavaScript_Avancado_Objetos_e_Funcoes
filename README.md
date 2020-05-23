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

```ecmascript 6
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


#### 05 - JavaSript O.O. Herança ES6


#### 06 - JavaScript O.O. Polimorfismo ES5


#### 07 - JavaScript O.O. Polimorfismo Desafio


#### 08 - JavaScript O.O. Polimorfismo ES6


#### 09 - Propriedades Privadas ES5


#### 10 - Propriedades Privadas ES6


#### 11 - Métodos Estáticos ES5


#### 12 - Métodos Estáticos ES6



[Voltar ao Índice](#indice)

---

