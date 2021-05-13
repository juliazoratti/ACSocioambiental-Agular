import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService

  ) { }

  ngOnInit() {

  }

  /* DESLOGA O USUARIO DA SESSAO */
  sair() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);

  }

}
