namespace Banco {
    export class ContaPF extends Conta {
        cpf: number;

        constructor(cpf: number, titular: string, saldo: number) {
            super(titular, saldo);
            this.cpf = cpf;
        }

        consultar(): string {
            return `Saldo atual: ${this.consultaSaldo()}`;
        }

        depositar(valor: number) {
            this.adicionarSaldo(valor);
        }

        sacar(valor: number) {
            this.sacarDoSaldo(valor);
        }
    }
}

 // Implementação da classe ContaPF
 const pessoaFisica = new Banco.ContaPF(1, "Danilo", 2000);
 console.log(pessoaFisica.consultar());
 pessoaFisica.depositar(500);
 console.log(pessoaFisica.consultar());
 pessoaFisica.sacar(200);
 console.log(pessoaFisica.consultar());