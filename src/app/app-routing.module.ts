import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
<<<<<<< HEAD
import { ItemComponent } from './item/item.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutoComponent } from './produto/produto.component';
import { CadastarProdutoComponent } from './cadastar-produto/cadastar-produto.component';
import { DeletarProdutoComponent } from './deletar-produto/deletar-produto.component';
=======
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
>>>>>>> 2131fcb7a9d18e8903eac1665bcbaf638d1cc408

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
<<<<<<< HEAD
  {path: 'home', component: MenuComponent},
  {path: 'produtos', component: ProdutoComponent},
  {path: 'item', component: ItemComponent},
  {path: 'cadastar-produto/:id', component: CadastarProdutoComponent},
  {path: 'deletar-produto/:id', component: DeletarProdutoComponent}  
]

=======
  {path: 'home', component: HomeComponent}
];
>>>>>>> 2131fcb7a9d18e8903eac1665bcbaf638d1cc408

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
