import { Component, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { SesionService } from 'src/app/services/session-service.service';
import { Usuario} from 'src/app/models/Sesion'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-sophia-new';

  constructor(/* private spinner: NgxSpinnerService */ private sesion: SesionService) {}


  ngOnInit() {
    if(!sessionStorage.getItem('token')){
      this.crearSesion(); 
    }
  
    /* this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
 */
    window.scroll(0,0);
  }


  cerrarSesion(){
    this.sesion.cerrarSesion().subscribe((data)=>{
        console.log(data)
    })
  }

  crearSesion(){
    var date = new Date();
    var nombre = 'Invitado' + this.randomNumber(100, 999);
    const usuario: Usuario = {
      token: '',
      usuario: nombre,
      inicio: date,
      fin: date
    };

    this.sesion.crearUsuario(usuario).subscribe((data)=>{
        sessionStorage.setItem('token',data.token);
        sessionStorage.setItem('usuario',nombre);
    })

  }



 /*  obtenerSesion(){
    this.sesion.obtenerSesion().subscribe((data)=>{
        
    })
  } */

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


}
