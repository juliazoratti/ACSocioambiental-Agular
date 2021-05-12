import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categoria: Categoria = new Categoria();
  categoriaLista: Categoria[];

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private alertas: AlertasService

  ) { }

  ngOnInit(){
    if(localStorage.getItem('token') == null) {
      this.router.navigate(['/login']);

    }

    this.findAll();

  }

  findAll(){
    this.categoriaService.getAllCategoria().subscribe((resp:Categoria[])=>{
      this.categoriaLista = resp;

    })
  }

  salvar(){
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
      this.findAll();

      this.alertas.showAlertSuccess('Categoria cadastrada com sucesso!');
      this.categoria = new Categoria();

    })

  }

}
