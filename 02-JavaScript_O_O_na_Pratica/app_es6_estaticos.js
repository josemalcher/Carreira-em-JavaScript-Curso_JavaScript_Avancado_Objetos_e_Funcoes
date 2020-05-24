class DateConverter{
    static ptBr(date) {
        return date.split('-').reverse().join('/');
    }
    static en(date) {
        return date.split('/').reverse().join('-');
    }
}

console.log(DateConverter.ptBr('2020-12-25'));
console.log(DateConverter.en('25/12/2020'));

/*
25/12/2020
2020-12-25
* */