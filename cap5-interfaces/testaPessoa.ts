let pessoa: IPessoa;
let pessoa2: IPessoa;

const example1 = 'string';
const example2 = Symbol();

interface MeuExemplo {
    [example1]: string;
    [example2]: boolean;
}