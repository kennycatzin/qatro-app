import { Injectable } from '@angular/core';
import { ActCalendario } from '../../models/actCalendario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/config';
import { map, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CalendarioService {
  // coach: Coach;
  token: string;
  obj: any = {};
  constructor(public http: HttpClient,
              public router: Router
            ) {
  }
  getCalendario(desde: number = 0) {
    let url = URL_SERVICIOS + '/calendario' + '?desde=' + desde;
    return this.http.get(url)
    .pipe(map( (resp: any) => {
      return resp;
    }), catchError(err => {
      swal.fire('Ha ocurrido un error',  'No se pudo obtener el calendario', 'error');
      return Observable.throw(err);
    }));
  }
  getClase(id) {
    let url = URL_SERVICIOS + '/calendario/porclase/' + id;
    return this.http.get(url).pipe(map( (resp: any) => {
        return resp;
      }), catchError(err => {
        swal.fire('Ha ocurrido un error',  'No se pudo obtener la clase', 'error');
        return Observable.throw(err);
      }));
  }
  getDisponibilidad(id) {
    let url = URL_SERVICIOS + '/paqusuario/numero/' + id;
    return this.http.get(url).pipe(map( (resp: any) => {
      console.log(resp);
      return resp;
    }), catchError(err => {
      swal.fire('No tiene clases disponibles',  'Debe cargar un paquete', 'info');
      return Observable.throw(err);
    }));
  }
  asd( actCal: ActCalendario ) {
    console.log('llegueeeeee');
    let url = URL_SERVICIOS + '/calendario/actualizar';
    console.log(url);

    console.log(actCal);
    return this.http.post( url, actCal )
    .pipe(map( (resp: any) => {
      swal.fire(
        'Lugar apartado',
        'Recuerda que tienes 12 horas para cancelar la clase',
        'success'
      );
      return false;
    }));
    }
    apartarLugar( actCal: ActCalendario) {
    let url = URL_SERVICIOS + '/calendario/actualizar';
    return this.http.put( url, actCal )
    .pipe(map( (resp: any) => {
      swal.fire(
        'Lugar apartado',
        'Recuerda que tienes 12 horas para cancelar la clase, Favor de revisar correo de confirmación',
        'success'
      );
      return true;
    }), catchError(err => {
      swal.fire('Ha ocurrido un error',  'No se pudo cargar la clase', 'error');
      return Observable.throw(err);
    }));
    }
 
}
