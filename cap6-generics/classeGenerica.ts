class classeGenerica<T> {
    private array: Array<T> = [];

    adicionaValor(item: T) {
        this.array.push(item);
    }

    retornaValores() {
        return this.array;
    }
}

let classeGenerica1 = new classeGenerica<number>();
classeGenerica1.adicionaValor(4);
console.log(classeGenerica1.retornaValores());
//Retorna [4]

let classeGenerica2 = new classeGenerica<string>();
classeGenerica2.adicionaValor('Homem de ferro');
console.log(classeGenerica2.retornaValores());
//Retorna ['Homem de ferro']