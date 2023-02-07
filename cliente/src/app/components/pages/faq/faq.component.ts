import { Component, OnInit ,OnDestroy } from '@angular/core';
import { SesionService } from 'src/app/services/session-service.service';
import { Componentes } from 'src/app/models/Sesion';
import { TimeService } from 'src/app/services/time.service';
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
import customerIo from '@analytics/customerio'


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent implements OnInit {
  inicio;
  fin;
  constructor(private sesion: SesionService, private _timeService: TimeService) { }

  ngOnInit() {
    const start = Date.now();
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
      this.cantidadVeces();
    }) 

  }


  cantidadVeces(){
    this.sesion.obtenerCantidadAyuda(sessionStorage.getItem('usuario')).subscribe((data)=>
    {
      console.log('Has necesitado AYUDA un total de: ' + (data) + ' veces en tu sesión actual');
    })
  }





}
