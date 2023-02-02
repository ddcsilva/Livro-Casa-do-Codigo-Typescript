// O enum nos permite declarar um conjunto de valores/constantes predefinidos
// Existem três formas de se trabalhar ele no TypeScript:
// Number, String e Heterogeneous

export enum DiaDaSemanaNumber1 {
    Segunda = 1,
    Terca = 2,
    Quarta = 3,
    Quinta = 4,
    Sexta = 5,
    Sabado = 6,
    Domingo = 7
}

export enum DiaDaSemanaNumber2 {
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo
}

export enum DiaDaSemanaNumber3 {
    Segunda = 18,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo
}

console.log(DiaDaSemanaNumber1[2]);
console.log(DiaDaSemanaNumber1.Domingo);
console.log(DiaDaSemanaNumber1["Quarta"]);

export enum DiaDaSemanaString {
    Segunda = "Segunda-feira",
    Terca = "Terça-feira",
    Quarta = "Quarta-feira",
    Quinta = "Quinta-feira",
    Sexta = "Sexta-feira",
    Sabado = "Sábado",
    Domingo = "Domingo"
}

console.log(DiaDaSemanaString.Sexta); // Sexta-feira
console.log(DiaDaSemanaString['Sabado']); // Sábado

export enum Heterogeneous {
    Segunda = 'Segunda-feira',
    Terca = 1,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo = 18
}

console.log(Heterogeneous.Segunda);
console.log(Heterogeneous['Segunda']);
console.log(Heterogeneous['Terca']);
console.log(Heterogeneous[1]);
console.log(Heterogeneous['Quarta']);
console.log(Heterogeneous['Quinta']);
console.log(Heterogeneous['Sexta']);
console.log(Heterogeneous['Sabado']);
console.log(Heterogeneous['Domingo']);