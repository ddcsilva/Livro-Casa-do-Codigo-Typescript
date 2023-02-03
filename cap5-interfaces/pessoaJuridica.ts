interface IPessoaJuridica extends IPessoa {
    conta: number;
    cnpj: number;
    abrirConta?(): boolean
}