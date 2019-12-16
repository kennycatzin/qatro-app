import { Injectable } from '@angular/core';
import { Paquete } from '../../models/paquete.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {
  paquete: Paquete;
  token: string;

  constructor(public http: HttpClient
            ) {
  }

  getPaquetesAdmin(desde: number) {
    let url = URL_SERVICIOS + '/paquete/admin?desde=' + desde;
    return this.http.get(url);
  }



  getPaquetes() {
    let url = URL_SERVICIOS + '/paquete';
    return this.http.get(url);
  }

  busqueda( nombre: string ) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/paquetes/' + nombre;
    return this.http.get(url)
            .pipe(map((resp: any) => resp.paquetes));

  }
  crearPaquete( paquete: Paquete) {
    let url = URL_SERVICIOS + '/paquete';
    return this.http.post( url, paquete )
      .pipe(map( (resp: any) => {
        swal.fire('Paquete creado exitósamente', 'success');
        return resp.paquete;
      }));
    }

    borrar(id: string) {
      let url = URL_SERVICIOS + '/paquete/' + id;
      return this.http.delete(url)
      .pipe(map((resp: any) => {
        swal.fire('Registro eliminado', 'El registro se ha eliminado correctamente', 'success');
        return true;
      }));
    }
 
}

