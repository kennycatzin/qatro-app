import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import swal from 'sweetalert2';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styles: []
})
export class AdminUsuariosComponent implements OnInit {
  objUsuarios: Usuario[] = [];
  totalUsuarios = 0;
  desde = 0;
  cargando = false;
  imagenSubir: File;
  usuarioId: string;
  usuarioModify = this.usuarioService.usuario;
  imagenTemp: string;
  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.traerDatos();
  }
  traerDatos(  ) {
    this.cargando = true;
    this.usuarioService.obtenerUsuarios(this.desde)
    .subscribe( (data: any) => {
      console.log(data.usuarios);
      this.objUsuarios = data.usuarios;
      this.totalUsuarios = data.numero;
      this.cargando = false;
      console.log(data.numero);
    });
  }
  hola(obj: any) {
    this.usuarioModify = obj;
    this.usuarioId = obj._id;
  }
  seleccionImagen(  archivo: File ) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }
    if (archivo.type.indexOf('image') < 0) {
      swal.fire('Solo imágenes', 'El archivo seleccionado debe ser una imagen', 'error');
      this.imagenSubir = null;
      return;
    }
    this.imagenSubir = archivo;

    const reader = new FileReader();
    const urlImagenTemp = reader.readAsDataURL( archivo );
    reader.onloadend = () => this.imagenTemp = reader.result as string;

  }
  cambiarImagen() {
    this.usuarioService.cambiarImagen(this.imagenSubir, this.usuarioId);
    this.traerDatos();
  }
  cambiarDesde(numero: number) {
    let desde = this.desde + numero;
    console.log(desde);

    if (desde >= this.totalUsuarios) {
      return;
    }
    if (desde < 0 ) {
      return;
    }
    this.desde += numero;
    this.traerDatos();
  }
  buscarUsuario(termino: string) {
    if (termino === '') {
      this.traerDatos();
      return;
    }
    this.usuarioService.buscarUsuario(termino)
          .subscribe((usuario: Usuario[]) => {
            this.objUsuarios = usuario;
    });
  }
  borrarUsuario(usuario: Usuario) {
    console.log(this.usuarioService.usuario._id);
    if (usuario._id === this.usuarioService.usuario._id) {
      swal.fire('Error al eliminar usuario', 'No se está permitido eliminarse a usted mismo', 'error');
      return;
    }
    swal.fire({
      title: '¿Desea confirmar?',
      text: 'Se eliminará este usuario permanentemente',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
      if (result.value) {
       this.usuarioService.borrarUsuario(usuario._id)
         .subscribe(resp => {
           this.traerDatos();
         });
      }
    });
  }
  actulizarUsuario(usuario: Usuario) {
      console.log(usuario);
      this.usuarioService.actualizarUsuario(usuario)
      .subscribe();
  }
}
