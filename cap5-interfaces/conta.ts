export abstract class Conta {
    private readonly _numeroDaConta: number;
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

    protected consultaSaldo(): number {
        return this.saldo;
    }

    protected adicionarSaldo(saldo: number): void {
        this.saldo += saldo;
    }

    protected sacarDoSaldo(valor: number): void {
        this.saldo -= valor;
    }
}

