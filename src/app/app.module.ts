import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandlerService } from './core/error-handler.service';
import { PessoasCadastroComponent } from './pages/pessoas/pessoas-cadastro/pessoas-cadastro.component';
import { PessoasPesquisaComponent } from './pages/pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoasModule } from './pages/pessoas/pessoas.module';
import { PessoasService } from './services/pessoas.service';


const routes: Routes = [
  { path: 'pessoas', component: PessoasPesquisaComponent },
  { path: 'pessoas/novo', component: PessoasCadastroComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AppRoutingModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    CoreModule,
    ToastModule,
    PessoasModule,
  ],
  providers: [
    PessoasService,
    ConfirmationService,
    MessageService,
    ErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
