class PessoaPrivada{
    constructor() {
        this._name;
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

}

let jose = new PessoaPrivada;
jose.name = "Jose Malcher jr";
console.log(jose.name) // Jose Malcher jr