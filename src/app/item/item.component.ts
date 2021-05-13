import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProdutoComponent } from '../produto/produto.component';
import { Produto } from "../model/Produto"
import { produtoService } from '../service/produto.service';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: Produto = new Produto()
  listaItens: Produto[]
  idItem: number;
  constructor(
    private router: Router,
    private produtoS: produtoService,
    private route: ActivatedRoute,
    private alertas: AlertasService,
    public auth: AuthService

  ) { }

  ngOnInit(){
    /*if(localStorage.getItem('token') == null) {
      this.router.navigate(['/login']);

    }*/

    if(environment.token == '') {
      this.router.navigate(['/login']);

    }

    /*if(localStorage.getItem('token') == null) {
      this.router.navigate(['/login']);

    }*/

    this.idItem = this.route.snapshot.params['id']

    this.findAllItem();
    this.findByIdTema(this.idItem);
}

findAllItem(){
  this.produtoS.getAllProduto().subscribe((resp: Produto[]) => {
    this.listaItens = resp;

  })
}

findByIdTema(id: number) {
  this.produtoS.getByIdProduto(id).subscribe((resp: Produto) => {
    this.item = resp;

  })

}

cadastrar(){
    this.produtoS.postProduto(this.item).subscribe((resp: Produto) => {
      this.item = resp;

      this.alertas.showAlertSuccess('Produto cadastrado com sucesso!')

      this.findAllItem()
      this.item = new Produto()

    })
  }

}
