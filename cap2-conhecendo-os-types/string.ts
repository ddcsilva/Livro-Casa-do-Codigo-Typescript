let verde: string = "verde";
let azul: string = 'azul';

console.log(verde);
console.log(azul);

let nome: string = 'Anders Hejlsberg';
let idade: number = 58;
let templateString: string = `Olá, meu nome é ${nome}, eu tenho ${idade} anos.`;

console.log(templateString);
console.log(templateString.length); // Tamanho
console.log(templateString.indexOf('nome')); // Posição 9
console.log(templateString.indexOf('idade')); // Não encontrado. Retorna -1
console.log(templateString.indexOf('"!"')); // Não encontrado. Retorna -1

