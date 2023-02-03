import { Conta } from "./conta";

export class ContaPJ extends Conta {
    cpnj: number;

    constructor(cpnj: number, titular: string, saldo: number) {
        super(titular, saldo);
        this.cpnj = cpnj;
    }

    consultar(): string {
        return `Saldo atual: ${this.consultaSaldo()}`;
    }

    depositar(valor: number) {
        this.adicionarSaldo(valor);
    }

    sacar(valor: number) {
        if (this.consultaSaldo() > 0 && valor <= this.consultaSaldo()) {
            this.sacarDoSaldo(valor);
        }
    }
}

// Implementação da classe ContaPJ
const pessoaJuridica = new ContaPJ(2, "Rosana", 5000);
console.log(pessoaJuridica.consultar());
pessoaJuridica.depositar(500);
console.log(pessoaJuridica.consultar());
pessoaJuridica.sacar(200);
console.log(pessoaJuridica.consultar());
