import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../../../../models/disciplina.model';
import { DisciplinaService } from 'src/app/services/service.index';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-disciplinas',
  templateUrl: './admin-disciplinas.component.html',
  styles: []
})
export class AdminDisciplinasComponent implements OnInit {
  objeto: Disciplina[];

disciplina: Disciplina = new Disciplina('', '', '', '', '');
disciplinaModify: Disciplina;
totalRegistros = 0;
  disciplinaId = '';
  desde = 0;
  cargando = false;
  imagenSubir: File;
  imagenTemp: string;
  // usuarioModify = this.disciplinaService.usuario;

  constructor(public disciplinaService: DisciplinaService) { }

  ngOnInit() {
    this.traerDatos();
  }
  buscar(termino: string) {
    if (termino === '') {
      this.traerDatos();
      return;
    }
    this.disciplinaService.buscar(termino)
          .subscribe((disciplina: Disciplina[]) => {
            this.objeto = disciplina;
    });
  }
  traerDatos() {
    this.cargando = true;
    this.disciplinaService.getDisciplinas(this.desde)
    .subscribe( (data: any) => {
      console.log(data);
      this.objeto = data.disciplinas;
      console.log(this.objeto);
      this.totalRegistros = data.numero;
      this.cargando = false;
      console.log(data.numero);
    });
  }
  borrar(disciplina: Disciplina) {
    swal.fire({
      title: '¿Desea confirmar?',
      text: 'Se eliminará este registro permanentemente',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
      if (result.value) {
       this.disciplinaService.borrar(disciplina._id)
         .subscribe(resp => {
           this.traerDatos();
         });
      }
    });
  }
  hola(obj: any) {
    this.disciplinaModify = obj;
    this.disciplinaId = obj._id;
  }
  actulizar(disciplina: Disciplina) {
    console.log(disciplina);
    this.disciplina = disciplina;
    // this.disciplinaService.actualizarUsuario(disciplina)
    // .subscribe();
}
cambiarImagen() {
  this.disciplinaService.cambiarImagen(this.imagenSubir, this.disciplinaId);
  // this.traerDatos();
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
cambiarDesde(numero: number) {
  let desde = this.desde + numero;
  console.log(desde);

  if (desde >= this.totalRegistros) {
    return;
  }
  if (desde < 0 ) {
    return;
  }
  this.desde += numero;
  this.traerDatos();
}
guardarDisciplina(f: NgForm) {
  if ( f.invalid ) {
    return;
  }
  console.log(this.disciplina);
  if (this.disciplina._id) {
    this.disciplinaService.actualizar(this.disciplina._id, this.disciplina)
    .subscribe( objeto => {
      console.log(objeto);
      this.traerDatos();
    });
  } else {
    this.disciplinaService.crearDisciplina( this.disciplina )
    .subscribe( objeto => {
      console.log(objeto);
      this.traerDatos();
    });
  }
}
nuevo() {
  this.disciplina = new Disciplina('', '', '', '', '');
}
}
