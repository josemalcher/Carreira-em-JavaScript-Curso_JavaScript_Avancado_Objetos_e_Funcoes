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
