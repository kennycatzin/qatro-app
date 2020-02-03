import { Component, OnInit } from '@angular/core';
import { CalendarioService } from 'src/app/services/service.index';
import { URL_SERVICIOS } from '../../../../config/config';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ApartarClase } from '../../../models/apartarClase.model';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
objCalendario: any = [];
objClase: any = [];
idClase = '';
clasesDisp = 0;
totalRegistros = 0;
desde = 0;
existeId = '';
fechaVenc = new Date().toJSON().slice(0 , 10).replace(/-/g, '/');
objDisponibilidad: any = [];
mivar = '';

  constructor(public calendarioService: CalendarioService, public router: Router) { }

  ngOnInit() {
    this.traerDatos();
    this.existeId = (localStorage.getItem('id'));
  }

  traerDatos() {
    this.calendarioService.getCalendario(this.desde)
    .subscribe( (data: any) => {
    console.log( data.calendario );
    this.objCalendario = data.calendario;
    this.totalRegistros = data.total;
    console.log(this.totalRegistros);
    });
    this.calendarioService.getDisponibilidad(localStorage.getItem('id'))
    .subscribe( (data: any) => {
      console.log(data);
      this.clasesDisp = data.total;
      this.fechaVenc = data.fecha;
    });
  }
  abrirModal(id: string) {
      this.traerDatos();
      this.idClase = id;
      console.log(id);
      this.calendarioService.getClase(id)
      .subscribe( (data: any) => {
        console.log( data.calendario );
        this.objClase = data.calendario;
      });
  }
  kenny() {
    return URL_SERVICIOS;
  }

  apartarLugar(columna: number, posicion: number, varuno: string, vardos: string, variable: string, opcional: string) {
    console.log(posicion);
    console.log(columna);
    console.log(varuno);
    console.log(vardos);
    console.log(variable);
    console.log(opcional);
    let apartar = new ApartarClase(
      varuno,
      vardos,
      variable,
      localStorage.getItem('id'),
      posicion,
      columna,
      this.clasesDisp
    );
    if (opcional !== undefined) {
      if (opcional === (localStorage.getItem('id'))) {
        swal.fire({
          title: '¿Desea cancelar el lugar?',
          text: 'Se cancelará la reservación que había realizado.',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, cancelar el lugar'
        }).then((result) => {
          if (result.value) {
            const apartar = new ApartarClase(
              varuno,
              vardos,
              variable,
              localStorage.getItem('id'),
              posicion,
              columna,
              this.clasesDisp
            );
            this.calendarioService.cancelarLugar(apartar)
            .subscribe(resp => this.abrirModal(this.idClase));
            this.traerDatos();
          }
        });
      }
      console.log(localStorage.getItem('id'));
      console.log(opcional);
    // si no se especifica nombre
      return false;
    } else {

    }
    if (this.clasesDisp === 0) {
      swal.fire(
        'No tiene clases disponibles',
        'Debe solicitar un paquete',
        'warning'
      );
      return false;
    }
    swal.fire({
      title: '¿Desea apartar el lugar?',
      text: 'Se reservará este lugar para ti',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, apartar el lugar'
    }).then((result) => {
      console.log(result);
      if (result.value === true) {
        const apartar = new ApartarClase(
          varuno,
          vardos,
          variable,
          localStorage.getItem('id'),
          posicion,
          columna,
          this.clasesDisp
        );
        this.calendarioService.apartarLugar(apartar)
        .subscribe(resp => this.abrirModal(this.idClase));
        this.traerDatos();
      }
    });
  }
cambiarDesde(numero: number = 0) {
const midesde = this.desde + numero;
console.log(midesde);
console.log(numero);
if (midesde >= this.totalRegistros) {
  return;
}
if (midesde < 0 ) {
  return;
}
this.desde = this.desde + numero;
console.log('aqui desde' + this.desde);
this.traerDatos();
}
  miClase(someValue) {
    console.log('quiero saber quine soy: ' + someValue);
    if (someValue === this.existeId){
      return 'text-success';
    } else {
      return 'naranja';
    }
}
}
