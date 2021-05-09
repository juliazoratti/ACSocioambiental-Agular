<<<<<<< HEAD
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
=======
>>>>>>> 026528bf6808c13a9dbe20ab604249d91901932d
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
<<<<<<< HEAD
categoria: Categoria = new Categoria()
categoriaLista:Categoria[]
=======
  categoria: Categoria = new Categoria();
  categoriaLista:Categoria[];
>>>>>>> 026528bf6808c13a9dbe20ab604249d91901932d

  constructor(
    private router:Router,
    private categoriaService:CategoriaService
<<<<<<< HEAD
  ) { }

  ngOnInit(){
    console.log(environment.token,'<==== ====== ==== token CATEGORIA!!!!00000000')
=======

  ) { }

  ngOnInit(){
    if(environment.token == '') {
      this.router.navigate(['/login']);

    }
>>>>>>> 026528bf6808c13a9dbe20ab604249d91901932d

  }

  salvar(){
<<<<<<< HEAD
    this.categoriaService.postCategoria(this.categoria).subscribe((resp:Categoria)=>{
      this.categoria = resp
      console.log('nome da categoria: ', this.categoria.nome)

    })
=======
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
      console.log('nome da categoria: ', this.categoria.nome);

    })

>>>>>>> 026528bf6808c13a9dbe20ab604249d91901932d
  }

}
