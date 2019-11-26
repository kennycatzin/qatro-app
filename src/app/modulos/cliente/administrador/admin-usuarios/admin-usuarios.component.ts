import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import swal from 'sweetalert2';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styles: []
})
export class AdminUsuariosComponent implements OnInit {
  objUsuarios: any[] = [];
  imagenSubir: File;
  usuarioId: string;
  usuarioModify = this.usuarioService.usuario;
  imagenTemp: string;
  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.traerDatos();
  }
  traerDatos() {
    this.usuarioService.obtenerUsuarios()
    .subscribe( (data: any) => {
      this.objUsuarios = data.usuarios;
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
}
