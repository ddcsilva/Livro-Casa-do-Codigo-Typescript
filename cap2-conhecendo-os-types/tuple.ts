let lista: [string, number, string] = ['string', 1, 'string 2'];
lista.push('string 3', 2, 'string 4');
console.log(lista);

let lista2: [nome: string, idade: number, email: string] = ['Bill Gates', 1, 'bill@teste.com'];
lista2.push('Steve Jobs', 2, 'steve@teste.com');
console.log(lista2);

console.log(lista2[0]);
console.log(lista2[1]);

// Tuplas Readonly
let lista3: readonly [string, number] = ['Bill Gates', 1];
// lista3.push('Steve Jobs', 2);