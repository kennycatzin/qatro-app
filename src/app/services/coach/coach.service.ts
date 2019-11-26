import { Injectable } from '@angular/core';
import { Coach } from '../../models/coach.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  coach: Coach;
  token: string;

  constructor(public http: HttpClient
            ) {
  }
  getCoaches() {
    let url = URL_SERVICIOS + '/coach';
    return this.http.get(url);
  }
  crearCoaches( coach: Coach) {
    let url = URL_SERVICIOS + '/coach';
    return this.http.post( url, coach )
      .pipe(map( (resp: any) => {
        swal.fire('Coach creado exitósamente', '' + coach.alias + '', 'success');
        return resp.coach;
      }));
    }
 
}

