// O Type assertion funciona da mesma forma que o cast em outras linguagens de programação.

function typeAssetions(codigoAny: any) {
    let codigoNumber: number = <number>codigoAny;
    return codigoNumber * 10;
}

console.log(typeAssetions(10));
