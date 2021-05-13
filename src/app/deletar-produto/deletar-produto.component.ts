import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { produtoService } from '../service/produto.service';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css']
})
export class DeletarProdutoComponent implements OnInit {

  item: Produto = new Produto();
  idItem: number;

  constructor(
    private produtoS: produtoService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService

  ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/login']);

    }

    /*if(localStorage.getItem('token') == null) {
      this.router.navigate(['/login']);

    }*/

    this.idItem = this.route.snapshot.params['id'];
    this.findByIdItem(this.idItem);

  }

  findByIdItem(id: number){
    this.produtoS.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.item = resp;

    })
  }

  apagar(){
    this.produtoS.deleteProduto(this.idItem).subscribe(()=>{
      this.alertas.showAlertSuccess('Produto apagado com sucesso!');

      this.router.navigate(['/produtos']);

    })
  }
}
