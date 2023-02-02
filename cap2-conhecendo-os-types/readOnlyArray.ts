// Array que permite somente leitura e remove todos os métodos
let numerosDaMega: ReadonlyArray<number> = [8, 5, 5, 11, 4, 28];
// numerosDaMega[0] = 12; // error!
// numerosDaMega.push(23); // error!
// numerosDaMega.pop(); // error!
// numerosDaMega.length = 100;	// error!

// Da versão 3.4 em diante
let	numerosDaMega2:	Readonly<number[]> = [8, 5, 5, 11, 4, 28];

console.log(numerosDaMega);
console.log(numerosDaMega2);