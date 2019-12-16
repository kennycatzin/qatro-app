import { Component, OnInit } from '@angular/core';
import { PaqueteService } from 'src/app/services/service.index';
import { Paquete } from '../../../../models/paquete.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-admin-paquetes',
  templateUrl: './admin-paquetes.component.html',
  styles: []
})
export class AdminPaquetesComponent implements OnInit {
  cargando = false;
  paquetes: Paquete[];
  totalRegistros = 0;
  desde = 0;
  constructor( public paqueteService: PaqueteService) { }

  ngOnInit() {
    this.traerDatos();
  }
  traerDatos() {
    this.cargando = true;
    this.paqueteService.getPaquetesAdmin(this.desde)
    .subscribe( (data: any) => {
      this.paquetes = data.paquetes;
      this.totalRegistros = data.numero;
      this.cargando = false;
    });
  }
  borrar(paquete: Paquete) {
    swal.fire({
      title: '¿Desea confirmar?',
      text: 'Se eliminará este usuario permanentemente',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
      if (result.value) {
       this.paqueteService.borrar(paquete._id)
         .subscribe(resp => {
           this.traerDatos();
         });
      }
    });
  }
  actualizar(paquete: Paquete) {
    console.log(paquete);
  }
  busqueda(termino: string) {
    if (termino === '') {
      this.traerDatos();
      return;
    }
    this.paqueteService.busqueda(termino)
          .subscribe((paquete: Paquete[]) => {
            this.paquetes = paquete;
    });
  }
  cambiarDesde(numero: number) {
    let desde = this.desde + numero;
    if (desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0 ) {
      return;
    }
    this.desde += numero;
    this.traerDatos();
  }
}
