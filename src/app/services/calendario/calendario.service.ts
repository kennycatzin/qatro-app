import { Injectable } from '@angular/core';
import { ApartarClase } from '../../models/apartarClase.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/config';
import { map, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { ActCalendario } from '../../models/actCalendario.model';
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
  asd( actCal: ApartarClase ) {
    let url = URL_SERVICIOS + '/calendario/actualizar';
    return this.http.post( url, actCal )
    .pipe(map( (resp: any) => {
      swal.fire(
        'Lugar apartado',
        'Recuerda que son 12 horas para cancelar la clase',
        'success'
      );
      return false;
    }));
    }
    apartarLugar( apartar: ApartarClase) {
    let url = URL_SERVICIOS + '/calendario/actualizar';
    return this.http.put( url, apartar )
    .pipe(map( (resp: any) => {
      swal.fire(
        'Lugar apartado',
        'Recuerda que son 12 horas para cancelar la clase, Favor de revisar correo de confirmación',
        'success'
      );
      return true;
    }), catchError(err => {
      swal.fire('Ha ocurrido un error',  'No se pudo cargar la clase', 'error');
      return Observable.throw(err);
    }));
    }
    cancelarLugar( apartar: ApartarClase) {
      let url = URL_SERVICIOS + '/calendario/cancelar';
      return this.http.put( url, apartar )
      .pipe(map( (resp: any) => {
        swal.fire(
          'Lugar cancelado',
          '',
          'success'
        );
        return true;
      }), catchError(err => {
        swal.fire('Ha ocurrido un error',  'No se pudo cargar la clase', 'error');
        return Observable.throw(err);
      }));
      }
 guardarCalendario(calendario: ActCalendario) {
  let url = URL_SERVICIOS + '/calendario';
  return this.http.post( url, calendario )
  .pipe(map( (resp: any) => {
    swal.fire(
      'Calendario Creado',
      '',
      'success'
    );
    return false;
  }));
 }
}
