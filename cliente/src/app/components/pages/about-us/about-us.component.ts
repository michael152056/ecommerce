import { Component, OnInit, OnDestroy } from '@angular/core';
import { Componentes } from 'src/app/models/Sesion';
import { SesionService } from 'src/app/services/session-service.service';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass']
})
export class AboutUsComponent implements OnInit {

  constructor(private sesion: SesionService,private _timeService: TimeService) { }

  ngOnInit() {
    const start = Date.now();
    this.crearComponente(); 

    const millis = (Date.now() - start)*100;
    console.log('Tiempo en milisegundos: ' + millis)
  
  }

  crearComponente(){
    var date = new Date();
    const componente: Componentes = {
      token: sessionStorage.getItem('token'),
      usuario: sessionStorage.getItem('usuario'),
      componente: 'Ayuda',
      inicio: date,
      fin: date
    };

    this.sesion.crearComponente(componente.token, componente).subscribe((data)=>{
 
    }) 

  }
  

}
