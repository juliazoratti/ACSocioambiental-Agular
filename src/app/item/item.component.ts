import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProdutoComponent } from '../produto/produto.component';
import { Produto } from "../model/Produto"
import { produtoService } from '../service/produto.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: Produto = new Produto()
  listaItens: Produto[]

  constructor(
    private router: Router,
    private produtoS: produtoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    let id = this.route.snapshot.params['id']
<<<<<<< HEAD
  if(environment.token ==''){
    /*this.router.navigate(['/login'])*/
  }

  this.findAllItem()
=======

    if(environment.token == ''){
      this.router.navigate(['/login']);

    }

    this.findAllItem();
>>>>>>> 026528bf6808c13a9dbe20ab604249d91901932d
}

findAllItem(){
  this.produtoS.getAllProduto().subscribe((resp: Produto[]) => {
    this.listaItens = resp
  })
}
cadastrar(){
  this.produtoS.postProduto(this.item).subscribe((resp: Produto) => {
    alert('Produto cadastrado com sucesso!')
    this.findAllItem()
    this.item = new Produto()
  })
}
}
