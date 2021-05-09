import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { produtoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastar-produto',
  templateUrl: './cadastar-produto.component.html',
  styleUrls: ['./cadastar-produto.component.css']
})
export class CadastarProdutoComponent implements OnInit {
<<<<<<< HEAD
  item: Produto = new Produto()
  listaItens: Produto[]
=======

  item: Produto = new Produto()
>>>>>>> 026528bf6808c13a9dbe20ab604249d91901932d

  constructor(
    private produtoS: produtoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token ==''){
      this.router.navigate(['/login'])
  }
  let id = this.route.snapshot.params['id']
    this.findByIdItem(id)

  }
  
  findByIdItem(id: number){
    this.produtoS.getByIdProduto(id).subscribe((resp: Produto) =>{
      this.item = resp
    })
  }

<<<<<<< HEAD
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
=======
  atualizar(){
    this.produtoS.putProduto(this.item).subscribe((resp: Produto) =>
    {
      this.item = resp
      alert('Produto atualizado com sucesso')
      this.router.navigate(['/item'])
>>>>>>> 026528bf6808c13a9dbe20ab604249d91901932d
    })
  }

}
