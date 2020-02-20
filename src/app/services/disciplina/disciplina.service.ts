import { Injectable } from '@angular/core';
import { Disciplina } from '../../models/disciplina.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../archivos/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  disciplina: Disciplina;
  token: string;

  constructor(public http: HttpClient,
              public subirArchivo: SubirArchivoService
            ) {
  }


  getDisciplinas() {
    let url = URL_SERVICIOS + '/disciplina';
    return this.http.get(url);
  }

  getDisciplinaAdmin(desde: number) {
    let url = URL_SERVICIOS + '/disciplina?desde=' + desde;
    return this.http.get(url);
  }
  crearDisciplina( disciplina: Disciplina) {
    let url = URL_SERVICIOS + '/disciplina';
    return this.http.post( url, disciplina )
      .pipe(map( (resp: any) => {
        swal.fire('Disciplina creada exitósamente', '' + disciplina.nombre + '', 'success');
        return resp.disciplina;
      }));
    }
    buscar( nombre: string ) {
      let url = URL_SERVICIOS + '/busqueda/coleccion/disciplinas/' + nombre;
      return this.http.get(url)
              .pipe(map((resp: any) => resp.disciplinas));
  
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
    crearDsiciplinas( disciplina: Disciplina) {
      let url = URL_SERVICIOS + '/disciplina/nuevo';
      return this.http.post( url, disciplina )
        .pipe(map( (resp: any) => {
          swal.fire('Coach creado exitósamente', '' + disciplina.nombre + '', 'success');
          return resp.coach;
        }));
      }
      borrar(id: string) {
        let url = URL_SERVICIOS + '/disicplina/' + id;
        return this.http.delete(url)
        .pipe(map((resp: any) => {
          swal.fire('Registro eliminado', 'El registro se ha eliminado correctamente', 'success');
          return true;
        }));
      }
      actualizar(id: string, disciplina: Disciplina) {
        let url = URL_SERVICIOS + '/disciplina/' + id;
        return this.http.put(url, disciplina)
        .pipe(map((resp: any) => {
          swal.fire('Registro Actualizado', 'El registro se ha actualizado correctamente', 'success');
          return true;
        }));
      }
}

