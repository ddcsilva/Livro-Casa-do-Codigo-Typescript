interface Z { x(): string }

class A implements Z {
    x(): string {
        throw new Error("Method	not	implemented.");
    }
}

class B implements Z {
    x(): string {
        throw new Error("Method	not	implemented.");
    }
}

function exemploComInstanceof(paramentro: Z) {
    if (paramentro instanceof A) {
        console.log("Sou	a	classe	A");
    }
    else if (paramentro instanceof B) {
        console.log("Sou	a	classe	B");
    }
}