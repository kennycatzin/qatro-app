import { Injectable } from '@angular/core';
import { Coach } from '../../models/coach.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../archivos/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  coach: Coach;
  token: string;

  constructor(public http: HttpClient,
              public subirArchivo: SubirArchivoService
            ) {
  }
  getCoaches() {
    let url = URL_SERVICIOS + '/coach';
    return this.http.get(url);
  }
  getCoachesAdmin(desde: number) {
    let url = URL_SERVICIOS + '/coach/admin?desde=' + desde;
    return this.http.get(url);
  }
  busqueda( nombre: string ) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/coaches/' + nombre;
    return this.http.get(url)
            .pipe(map((resp: any) => resp.coaches));

  }
  cambiarImagen(archivo: File, id: string) {
    this.subirArchivo.subirArchivo(archivo, 'coaches', id)
    .then( (resp: any) => {
      swal.fire('Operación exitosa', '' + resp.mensaje + '', 'success');
    })
    .catch( (resp: any) => {
      swal.fire('Operación con errores', '' + resp.mensaje + '', 'info');
    });
  }
  crearCoaches( coach: Coach) {
    let url = URL_SERVICIOS + '/coach/nuevo';
    return this.http.post( url, coach )
      .pipe(map( (resp: any) => {
        swal.fire('Coach creado exitósamente', '' + coach.alias + '', 'success');
        return resp.coach;
      }));
    }
    borrar(id: string) {
      let url = URL_SERVICIOS + '/coach/' + id;
      return this.http.delete(url)
      .pipe(map((resp: any) => {
        swal.fire('Registro eliminado', 'El registro se ha eliminado correctamente', 'success');
        return true;
      }));
    }
    actualizar(id: string, coach: Coach) {
      let url = URL_SERVICIOS + '/coach/' + id;
      return this.http.put(url, coach)
      .pipe(map((resp: any) => {
        swal.fire('Registro Actualizado', 'El registro se ha actualizado correctamente', 'success');
        return true;
      }));
    }
 
}

