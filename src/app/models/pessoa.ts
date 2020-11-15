import { ContatoPessoa } from './contatoPessoa';
export class Pessoa {
    codigo: number;
    nome: string;
    logradouro: string;
    numero: number;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
    ativo: boolean;
    contatos = new Array<ContatoPessoa>();
}
