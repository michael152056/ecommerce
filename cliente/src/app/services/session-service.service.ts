import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Componentes, Usuario } from '../models/Sesion';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  url = 'http://localhost:4000/api'
  constructor(private http: HttpClient) { }

  crearUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(this.url, usuario);
  }

  crearComponente(token: string, componente: Componentes): Observable<any> {
    return this.http.post(this.url + '/'+ token, componente);
  }


  obtenerCantidadAyuda(idUsuario: string):Observable<any>{
    return this.http.get(this.url + '/ayuda/' + idUsuario);
  }

  tiempoComponentes(idUsuario: string):Observable<any>{
    return this.http.get(this.url + '/tiempo/' + idUsuario);
  }

  cerrarSesion():Observable<any>
  {
    return this.http.get(this.url + this.getToken())
  }

  getToken(){
    return sessionStorage.getItem('token');
  }

}
