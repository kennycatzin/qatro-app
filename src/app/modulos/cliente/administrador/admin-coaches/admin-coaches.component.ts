import { Component, OnInit } from '@angular/core';
import { Coach } from '../../../../models/coach.model';
import { CoachService } from '../../../../services/coach/coach.service';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-coaches',
  templateUrl: './admin-coaches.component.html',
  styles: []
})
export class AdminCoachesComponent implements OnInit {
  coach: Coach = new Coach('', '', '', '', '', '', '', '', '', '', '', '', '');
  coachModify: Coach;
  cargando = false;
  objeto: Coach[];
  imagenSubir: File;
  imagenTemp: string;
  totalRegistros = 0;
  coachId = '';
  desde = 0;

  constructor(public coachService: CoachService) { }

  ngOnInit() {
    this.traerDatos();
  }
  buscar(termino: string) {
    if (termino === '') {
      this.traerDatos();
      return;
    }
    this.coachService.busqueda(termino)
          .subscribe((coach: Coach[]) => {
            this.objeto = coach;
    });
  }
  traerDatos() {
    this.cargando = true;
    this.coachService.getCoachesAdmin(this.desde)
    .subscribe( (data: any) => {
      console.log(data);
      this.objeto = data.coaches;
      console.log(this.objeto);
      this.totalRegistros = data.numero;
      this.cargando = false;
      console.log(data.numero);
    });
  }
  borrar(coach: Coach) {
    swal.fire({
      title: '¿Desea confirmar?',
      text: 'Se eliminará este registro permanentemente',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
      if (result.value) {
       this.coachService.borrar(coach._id)
         .subscribe(resp => {
           this.traerDatos();
         });
      }
    });
  }
  hola(obj: any) {
    this.coachModify = obj;
    this.coachId = obj._id;
  }
  actulizar(coach: Coach) {
    console.log(coach);
    this.coach = coach;
    // this.disciplinaService.actualizarUsuario(disciplina)
    // .subscribe();
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
  this.coachService.cambiarImagen(this.imagenSubir, this.coachId);
  // this.traerDatos();
}
guardarCoach(f: NgForm) {
  console.log('llegue');
  if ( f.invalid ) {
    console.log('mal');
    return;
  }
  console.log(this.coach);
  if (this.coach._id) {
    this.coachService.actualizar(this.coach._id, this.coach)
    .subscribe( objeto => {
      console.log(objeto);
      this.traerDatos();
    });
  } else {
    this.coachService.crearCoaches( this.coach )
    .subscribe( objeto => {
      console.log(objeto);
      this.nuevo();
      this.traerDatos();
    });
  }
}
nuevo() {
  this.coach = new Coach('', '', '', '', '', '', '', '', '', '', '', '', '');
}
}
