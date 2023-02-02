// O union nos permite combinar um ou mais tipos

let exemploUnion: (string | number);
exemploUnion = 123;
console.log(exemploUnion);
exemploUnion = 'ABC';
console.log(exemploUnion);

let exemploUnion2: (string | number | boolean);
exemploUnion2 = 123;
console.log(exemploUnion2);
exemploUnion2 = "ABC";
console.log(exemploUnion2);
exemploUnion2 = true;
console.log(exemploUnion2);

var unionArray: (number[] | string[]);
var index: number;
unionArray = [1, 2, 4]
for (index = 0; index < unionArray.length; index++) {
    console.log(unionArray[index])
}
unionArray = ["A", "B", "C", "D"]
for (index = 0; index < unionArray.length; index++) {
    console.log(unionArray[index])
}

function unionFunction(usuario: string | string[]) {
    if (typeof usuario == "string") {
        console.log(usuario, "excluido");
    } else {
        var i;
        for (i = 0; i < usuario.length; i++) {
            console.log(usuario[i], "excluido");
        }
    }
}

let x: string | number | boolean = 13;
console.log(typeof (x))