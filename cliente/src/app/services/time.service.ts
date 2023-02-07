import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  generarFecha(){
    var date = new Date();
    var fecha = {
       minutos: date.getMinutes(),
       segundos: date.getSeconds(),
       milisegundos: date.getMilliseconds()
    } 
    localStorage.setItem('inicio',fecha.toString())
    console.log(fecha);
  }


}
