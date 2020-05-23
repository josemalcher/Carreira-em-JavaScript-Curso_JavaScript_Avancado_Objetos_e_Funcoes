class Conta{
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = 0
    }

    deposita(valor) {
        this.saldo += valor;
    }

    saque(valor) {
        if(this.saldo > 0 && this.saldo >= valor){
            this.saldo -= valor;
        }else{
            cosole.log("Saque não permitido")
        }
    }

    getSaldo() {
        return this.saldo;
    }
}

class ContaCorrent extends Conta{
    constructor(numero, titular) {
        super(numero, titular);
    }
    deposita(valor) {
        this.saldo += (valor - 2);
    }
}
class ContaPoupanca extends Conta{
    constructor(numero, titular) {
        super(numero, titular);
    }
}

let jose = new ContaCorrent(321, "José Malcher Jr");
console.log(jose.getSaldo()); // 0
jose.deposita(200);
jose.saque(50);
jose.deposita(100);
console.log(jose.getSaldo()); // 246