import { Injectable } from '@angular/core';
import { Disciplina } from '../../models/disciplina.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  disciplina: Disciplina;
  token: string;

  constructor(public http: HttpClient
            ) {
  }


  getDisciplinas() {
    let url = URL_SERVICIOS + '/disciplina';
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
 
}

