import { Pessoa } from './pessoa';

export class ContatoPessoa {
    codigo: number;
    nome: string;
    email: string;
    telefone: string;
    codigo_pessoa = new Pessoa();

    constructor(
        codigo?: number,
        nome?: string,
        email?: string,
        telefone?: string,
    ) {
            this.codigo = codigo;
            this.nome = nome;
            this.email = email;
            this.telefone = telefone;
    }
}
