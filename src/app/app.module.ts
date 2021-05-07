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
<<<<<<< HEAD
import { ProdutoComponent } from './produto/produto.component';
import { ItemComponent } from './item/item.component';
=======
import { CategoriaComponent } from './categoria/categoria.component';
>>>>>>> 9e29fafd33e94cf8255ba48c1da52346a561c3e2

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    CadastroComponent,
<<<<<<< HEAD
    ProdutoComponent,
    ItemComponent
=======
    CategoriaComponent
>>>>>>> 9e29fafd33e94cf8255ba48c1da52346a561c3e2
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
