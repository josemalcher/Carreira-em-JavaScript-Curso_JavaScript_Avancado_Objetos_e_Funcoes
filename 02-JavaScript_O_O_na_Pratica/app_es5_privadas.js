function Pessoa() {
    this._name;

    this.setName = function (value) {
        this._name = value;
    };
    this.getName = function () {
        return this._name;
    };
}

var jose = new Pessoa();
jose.setName("Jose Malcher JR");
console.groupCollapsed(jose.getName()); // Jose Malcher JR