import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { ProdutoComponent } from './produto/produto.component';
import { ItemComponent } from './item/item.component';
import { CadastarProdutoComponent } from './cadastar-produto/cadastar-produto.component';
import { DeletarProdutoComponent } from './deletar-produto/deletar-produto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { AtualizarProdutoComponent } from './atualizar-produto/atualizar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    CadastroComponent,
    ProdutoComponent,
    ItemComponent,
    CadastarProdutoComponent,
    DeletarProdutoComponent,
    CategoriaComponent,
    HomeComponent,
    AtualizarProdutoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
