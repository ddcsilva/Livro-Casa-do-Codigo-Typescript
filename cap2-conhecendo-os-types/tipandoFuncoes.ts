// Funções com Tipos
function calc(x: number, y: number): string {
    return `Resultado:	${x + y}`;
}
let resultado: string;
resultado = calc(10, 15);

console.log(resultado);

// function calc2(x: number, y: number): string {
//     return `Resultado:	${x + y}`;
// }
// let resultado2: number;
// resultado2 = calc2(10, 15);

// console.log(resultado2);

// Void
function log(): void {
    console.log('Sem retorno');
}

log();

// Never
function verificandoTipo(x: string | number): boolean {
    if (typeof x === "string") {
        return true;
    } else if (typeof x === "number") {
        return false;
    }

    return fail("Esse método não aceita esse tipo de type!");
}
function fail(message: string): never {
    throw new Error(message);
}

function Update(): never {
    while (true) {
        console.log("Carregando	processos!");
    }
}