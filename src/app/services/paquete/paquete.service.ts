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
  usuario: Paquete;
  token: string;

  constructor(public http: HttpClient
            ) {
  }


  getPaquetes() {
    let url = URL_SERVICIOS + '/paquete';
    return this.http.get(url);
  }


  crearPaquete( paquete: Paquete) {
    let url = URL_SERVICIOS + '/paquete';
    return this.http.post( url, paquete )
      .pipe(map( (resp: any) => {
        swal.fire('Paquete creado exitósamente', 'success');
        return resp.usuario;
      }));
    }
 
}

