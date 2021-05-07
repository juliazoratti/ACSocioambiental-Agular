import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
<<<<<<< HEAD
import { ItemComponent } from './item/item.component';
=======
import { CategoriaComponent } from './categoria/categoria.component';
>>>>>>> 9e29fafd33e94cf8255ba48c1da52346a561c3e2
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'home', component: MenuComponent},
<<<<<<< HEAD
  {path: 'produtos', component: ProdutoComponent},
  {path: 'item', component: ItemComponent}
=======

  {path:'categoria',component: CategoriaComponent}
>>>>>>> 9e29fafd33e94cf8255ba48c1da52346a561c3e2
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
