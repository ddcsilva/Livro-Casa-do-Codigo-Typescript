function analisaSaldo(target: any, key: any, descriptor: any) {
    // Implementação
}

function validaTitular(target: any, propertyKey: any) {
    // Implementação
}

function saldo() {
    return (
        target: any,
        propertyKey: number,
        parameterIndex: number,
    ) => {
        console.log('target', target);
        console.log('property key', propertyKey);
        console.log('parameter index', parameterIndex);
    }
}

function log(ctor: any) {
    console.log(ctor)
}

function analisaConta(tipoConta: any) {
    return (_target: any) => {
        console.log(`${tipoConta} - ${_target}`);
    }
}

function validaRegra(ctor: any) { }

@log
@validaRegra
@analisaConta('PJ')
export abstract class Conta {
    private readonly _numeroDaConta: number;
    @validaTitular
    titular: string;
    private saldo: number;

    constructor(titular: string, saldo: number) {
        this._numeroDaConta = Math.floor(Math.random() * 1000) + 1;
        this.titular = titular;
        this.saldo = saldo;
    }

    get numeroDaConta(): number {
        return this._numeroDaConta;
    }

    @analisaSaldo
    protected consultaSaldo(): number {
        return this.saldo;
    }

    protected adicionarSaldo(@saldo() saldo: number): void {
        this.saldo += saldo;
    }

    protected sacarDoSaldo(valor: number): void {
        this.saldo -= valor;
    }
}

