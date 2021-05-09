import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
>>>>>>> 026528bf6808c13a9dbe20ab604249d91901932d

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
=======
  constructor(
    private router: Router

  ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/login'])

    }

>>>>>>> 026528bf6808c13a9dbe20ab604249d91901932d
  }

}
