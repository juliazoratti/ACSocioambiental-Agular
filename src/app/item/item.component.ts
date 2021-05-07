import { Component, OnInit } from '@angular/core';
import { ProdutoComponent } from '../produto/produto.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  /*item: Produto = new Produto()*/

  constructor() { }

  ngOnInit(): void {
  }

}
