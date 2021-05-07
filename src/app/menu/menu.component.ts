import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

<<<<<<< HEAD
  ngOnInit(){
    //tirar depois
    console.log(environment.token,'<==== ====== ==== token !!!!00000000')
=======
  ngOnInit() {
>>>>>>> 2131fcb7a9d18e8903eac1665bcbaf638d1cc408

  }

}
