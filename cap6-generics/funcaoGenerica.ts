function funcaoGenerica<T>(value: T): T {
 return value;   
}

console.log(funcaoGenerica<Number>(1));
console.log(funcaoGenerica<string>('teste'));
console.log(funcaoGenerica<boolean>(true));

function fun<T, U, V>(args:T, args2: U, args3: V): V {
    return args3;
}

console.log(fun<string, number, boolean>('teste', 1, true))