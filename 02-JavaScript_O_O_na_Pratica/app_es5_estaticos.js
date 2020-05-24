function DateConverter() {

}

DateConverter.ptBr = function (date) {
    return date.split('-').reverse().join('/');
};

var date = DateConverter.ptBr('2020-12-25');
console.log(date);