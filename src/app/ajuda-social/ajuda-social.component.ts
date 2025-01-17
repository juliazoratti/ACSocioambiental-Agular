import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { produtoService } from '../service/produto.service';

@Component({
  selector: 'app-ajuda-social',
  templateUrl: './ajuda-social.component.html',
  styleUrls: ['./ajuda-social.component.css']
})
export class AjudaSocialComponent implements OnInit {

  produto: Produto = new Produto();
  idProduto: number;
  listaDeProdutos: Produto[];

  categoria: Categoria = new Categoria();
  listaDeCategoria: Categoria[];
  idCategoria: number;

  key = 'data';
  reverse = true;

  constructor(
    private router: Router,
    private produtoService: produtoService,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private alertas: AlertasService,
    public auth: AuthService

  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    if(environment.token == '') {
      this.router.navigate(['/login']);

    }

    /*if(localStorage.getItem('token') == null) {
      this.router.navigate(['/login']);

    }*/

    this.idProduto = this.route.snapshot.params['id'];

    this.findByIdCategoria(2);
  

  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;

    })

  }

  findAllByProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaDeProdutos = resp;

    })

  }

  findAllByCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaDeCategoria = resp;

    })

  }

  /* TRAZ UM TEMA POR MEIO DO ID */
  findByIdCategoria(idCategoria: number) {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp;

    })

  }

  /* INSERE OS DADOS NA BASE DE DEDOS */
  publicar() {
    /* ACESSA O OBJETO TEMA(ID), E DENTRO DELE INSERE O DADO VINDO DA OPCAO ESCOLHIDA PELO USUARIO */
    this.categoria.id = this.idCategoria;
    /* INSERE O ID DE TEMA DENTRO DE POSTAGEM(TEMA) */
    this.produto.categoria = this.categoria;

    /* ACESSAR O OBJETO USUARIO(ID), E DENTRO DELE INSERE O DADO VINDO DO ENVIROMENT */
    //this.usuario.id = this.idUsuario;
    /* INSERE O ID DE USUARIO DENTRO DE POSTAGEM(USUARIO/AUTOR) */
    //this.postagem.autor = this.usuario;

    /* CHAMA O METODO DE PostagemService E REALIZA UM NOVO (POST), AGORA COM TODOS OS DADOS INSERIDOS */
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;

      this.alertas.showAlertSuccess('Postagem realizada com sucesso!');

      /* INSTANCIA UM NOVO OBJETO POSTAGEM PARA LIMPAR OS CAMPOS */
      this.produto = new Produto();

      /* TODA VEZ QUE INSERIR UM NOVO DADO NA BASE DE DADOS, IRA ATUALIZAR A VARIVEL listaDePostagem PARA SEMPRE MANTELA COMS OS DADOS MAIS ATUAIS */
      this.findAllByProdutos();

    })

  }

}