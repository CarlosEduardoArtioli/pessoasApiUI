import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService, ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaFiltro, PessoasService } from 'src/app/services/pessoas.service';

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html',
  styleUrls: ['./pessoas-cadastro.component.css']
})
export class PessoasCadastroComponent implements OnInit {

  contatos = [];
  exibirFormularioContato = false;
  pessoa = new Pessoa();

  constructor(
    private formBuilder: FormBuilder,
    private pessoasService: PessoasService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private confirmation: ConfirmationService,
  ) { }

  ngOnInit() {
    const idPessoa = this.route.snapshot.params.codigo;

    if (idPessoa) {
      this.carregarPessoa(idPessoa);
    }
  }

  carregarPessoa(id: number) {
    return this.pessoasService.buscarPorId(id)
      .then(pessoa => {
        this.pessoa = pessoa;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  get editando() {
    return Boolean(this.pessoa.codigo);
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarPessoa(form);
    }
    else {
      this.adicionarPessoa(form);
    }
  }

  adicionarPessoa(form: FormControl) {
    this.pessoasService.adicionar(this.pessoa)
      .then(pessoaAdicionada => {
        this.messageService.add({ severity: 'success', detail: 'Pessoa Adicionada com Sucesso!!!' });

        this.router.navigate(['/pessoas']);
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarPessoa(form: FormControl) {
    this.pessoasService.atualizar(this.pessoa)
      .then(pessoa => {
        this.pessoa = pessoa;
        this.messageService.add({ severity: 'success', detail: 'Pessoa Alterada com Sucesso!!!' });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  prepararNovoContato() {
    this.exibirFormularioContato = true;
  }
  closeForm() {
    this.exibirFormularioContato = false;
  }


}
