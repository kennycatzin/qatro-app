import { Injectable } from '@angular/core';
import { Paquete } from '../../models/paquete.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CargarPaquete } from 'src/app/models/cargarPaquete.model';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {
  paquete: Paquete;
  token: string;
  cargarPaquete: CargarPaquete;

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
        swal.fire('Paquete creado exitósamente', 'El registro se ha creado correctamente', 'success');
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

    actualizar(id: string, paquete: Paquete) {
      let url = URL_SERVICIOS + '/paquete/' + id;
      return this.http.put(url, paquete)
      .pipe(map((resp: any) => {
        swal.fire('Registro Actualizado', 'El registro se ha actualizado correctamente', 'success');
        return true;
      }));
    }
    comprar(cargarPaquete: CargarPaquete) {
      let url = URL_SERVICIOS + '/paqusuario';
      console.log(cargarPaquete);
      return this.http.post( url, cargarPaquete )
        .pipe(map( (resp: any) => {
          swal.fire('Paquete cargado exitósamente',  '', 'success');
          return resp.disciplina;
        }));
    }
}

