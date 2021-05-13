import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient

  ) { }

  url = environment.caminho + environment.port

<<<<<<< HEAD

  /*token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }*/


=======
>>>>>>> af947b594dbb00e3e7d461045a06f7d9cf3c4cd2
  /* LIBERA O ACESSO AS DEMAIS PAGINAS COM O TOKEN VINDO DO LOCAL STORAGE */
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
    //headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') || '')
<<<<<<< HEAD

=======
>>>>>>> af947b594dbb00e3e7d461045a06f7d9cf3c4cd2
  }

  getAllCategoria():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.url}/categorias`, this.token)
  }

  getByIdCategoria(id:number):Observable<Categoria>{
    return this.http.get<Categoria>(`${this.url}/categorias/${id}`,this.token)
  }

  getBynameCategoria(nome:string):Observable<Categoria>{
    return this.http.get<Categoria>(`${this.url}/categorias/${nome}`,this.token)
  }

  postCategoria(categoria:Categoria):Observable<Categoria>{
  return this.http.post<Categoria>(`${this.url}/categorias`, categoria ,this.token)
  }

  putCategoria(categoria:Categoria):Observable<Categoria>{
    return this.http.put<Categoria>(`${this.url}/categorias`, categoria, this.token)
  }

  deleteCategoria(id:number){
    return this.http.delete(`${this.url}/categorias/${id}`,this.token)
  }

}


