import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {

  categoria: Categoria = new Categoria();
  idCategoria: number;

    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private categoriaService: CategoriaService

    ) { }

    ngOnInit(){
      if(environment.token == '') {
        this.router.navigate(['/login']);

      }

      this.idCategoria= this.route.snapshot.params['id'];
      this.findAllIdCategoria(this.idCategoria);

    }

    findAllIdCategoria(id:number){
      this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) => {
        this.categoria = resp;

      })
    }

    atualizar(){
      this.categoriaService.putCategoria(this.categoria).subscribe((resp: Categoria) => {
        this.categoria = resp;

        alert("Categoria atualizada");
        this.router.navigate(['/categoria']);

      })
    }

}
