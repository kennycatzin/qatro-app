import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/config';
import { map, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { SubirArchivoService } from '../archivos/subir-archivo.service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario;
  token: string;
  menu: any = [];
  varia = '';
  constructor(public http: HttpClient,
              public router: Router,
              public subirArchivo: SubirArchivoService) {
      this.cargarStorage();
  }
  guardarStorage( id: string, token: string, usuario: Usuario, menu: any ) {
      localStorage.setItem('id', id);
      localStorage.setItem('token', token);
      localStorage.setItem('usuario', JSON.stringify(usuario));
      localStorage.setItem('menu', JSON.stringify(menu));

      this.usuario = usuario;
      this.token = token;
      this.menu = menu;
  }
  estalogueado() {
    return (this.token.length > 5 ) ? true : false;
  }
  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.menu = JSON.parse(localStorage.getItem('menu'));

    } else {
      this.token = '';
      this.usuario = null;
      this.menu = [];
    }
  }

  login( usuario: Usuario, recordar: boolean ) {
    if ( recordar ) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS + '/login';
    return this.http.post( url, usuario )
    .pipe(map( (resp: any) => {
       this.varia = resp.id;
       this.guardarStorage(resp.id, resp.token, resp.usuario, resp.menu);
       return true;
    }), catchError(err => {
      swal.fire('Credenciales incorrectas', '' + usuario.email + '', 'error');
      return Observable.throw(err);
    }));
  }


  crearUsuario( usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario';
    return this.http.post( url, usuario )
      .pipe(map( (resp: any) => {
        swal.fire('Usuario creado exitósamente', '' + usuario.email + '', 'success');
        return resp.usuario;
      }), catchError(err => {
        swal.fire(err.error.mensaje,  'Ha ocurrido un error', 'error');
        return Observable.throw(err);
      }));
    }
    actualizarUsuario( usuario: Usuario ) {
      let url = URL_SERVICIOS + '/usuario/' + usuario._id;
      return this.http.put( url, usuario )
        .pipe(map( (resp: any) => {
          swal.fire('Usuario actualizado exitósamente', '' + usuario.email + '', 'success');
          this.guardarStorage(localStorage.getItem('id'), localStorage.getItem('token'), resp.usuario, localStorage.getItem('menu'));
          return resp.usuario;
        }), catchError(err => {
          swal.fire(err.error.mensaje,  'Ha ocurrido un error con la actualización', 'error');
          return Observable.throw(err);
        }));
    }
    obtenerUsuarios() {
        let url = URL_SERVICIOS + '/usuario';
        return this.http.get(url);
    }
  logout(){
    this.usuario = null;
    this.token = '';
    this.menu = [];
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('menu');
    this.router.navigate(['/login']);
  }
  cambiarImagen(archivo: File, id: string) {
    this.subirArchivo.subirArchivo(archivo, 'usuarios', id)
    .then( (resp: any) => {
      swal.fire('Operación exitosa', '' + resp.mensaje + '', 'success');
    })
    .catch( (resp: any) => {
      swal.fire('Operación con errores', '' + resp.mensaje + '', 'info');
    });
  }
  buscarUsuario( nombre: string ) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/usuarios/' + nombre;
    return this.http.get(url)
            .pipe(map((resp: any) => resp.usuarios));

  }
  busqueda( nombre: string ) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/usuarios/' + nombre;
    return this.http.get(url)
            .pipe(map((resp: any) => resp.usuarios));

  }
  borrarUsuario(id: string) {
    let url = URL_SERVICIOS + '/usuario/' + id;
    return this.http.delete(url)
    .pipe(map((resp: any) => {
      swal.fire('Usuario eliminado', 'El usuario se ha eliminado correctamente', 'success')
      return true;
    }));
  }
}

