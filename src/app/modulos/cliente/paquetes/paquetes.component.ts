import { Component, OnInit } from '@angular/core';
import { PaqueteService } from 'src/app/services/service.index';
import { Router } from '@angular/router';
import { Paquete } from '../../../models/paquete.model';


@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./../cliente.component.css']

})
export class PaquetesComponent implements OnInit {
  objPaquetes: any[] = [];

  constructor(public paqueteService: PaqueteService,
              public router: Router) { }

  ngOnInit() {
    this.traerDatos();
  }
  traerDatos() {
    this.paqueteService.getPaquetes()
    .subscribe( (data: any) => {
      console.log( data.paquetes );
      this.objPaquetes = data.paquetes;
    });
  }

}
