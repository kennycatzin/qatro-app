import { Component, OnInit } from '@angular/core';
import { CalendarioService, UsuarioService, CoachService, DisciplinaService } from 'src/app/services/service.index';
import { ApartarClase } from '../../../../models/apartarClase.model';
import swal from 'sweetalert2';
import { Usuario } from 'src/app/models/usuario.model';
import { ActClases } from '../../../../models/actClases.model';
import { NgForm } from '@angular/forms';
import { ActCalendario } from '../../../../models/actCalendario.model';
import { Disciplina } from 'src/app/models/disciplina.model';
import { Coach } from '../../../../models/coach.model';

@Component({
  selector: 'app-admin-calendario',
  templateUrl: './admin-calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class AdminCalendarioComponent implements OnInit {
  objEspacios: any = [
    { posicion: 1,
      nombre: 'Fila 1',
      columnas: [
        {nombre: 'columna 1', fila: 1, posicion: 1, status: 1, tipo: 1},
        {nombre: 'columna 1', fila: 1, posicion: 2, status: 1, tipo: 1}
      ]
    },
    { posicion: 2,
      nombre: 'Fila 2',
      columnas: [
        {nombre: 'columna 1', fila: 2, posicion: 1, status: 1, tipo: 1},
        {nombre: 'columna 3', fila: 2, posicion: 2, status: 1, tipo: 1},
        {nombre: 'columna 4', fila: 2, posicion: 3, status: 1, tipo: 1},
        {nombre: 'columna 2', fila: 2, posicion: 4, status: 1, tipo: 1},
        {nombre: 'columna 5', fila: 2, posicion: 5, status: 1, tipo: 1},
        {nombre: 'columna 6', fila: 2, posicion: 6, status: 1, tipo: 1},
        {nombre: 'columna 7', fila: 2, posicion: 7, status: 1, tipo: 1},
        {nombre: 'columna 8', fila: 2, posicion: 8, status: 1, tipo: 1},
        {nombre: 'columna 9', fila: 2, posicion: 9, status: 1, tipo: 1},
        {nombre: 'columna 10', fila: 2, posicion: 10, status: 1, tipo: 1},
        {nombre: 'columna 11', fila: 2, posicion: 11, status: 1, tipo: 1}
      ]
    },
      {posicion: 3,
      nombre: 'Fila 3',
      columnas: [
        {nombre: 'columna 1', fila: 3, posicion: 1, status: 1, tipo: 1},
        {nombre: 'columna 2', fila: 3, posicion: 2, status: 1, tipo: 1},
        {nombre: 'columna 3', fila: 3, posicion: 3, status: 1, tipo: 1},
        {nombre: 'columna 4', fila: 3, posicion: 4, status: 1, tipo: 1},
        {nombre: 'columna 5', fila: 3, posicion: 5, status: 1, tipo: 1},
        {nombre: 'columna 6', fila: 3, posicion: 6, status: 1, tipo: 1},
        {nombre: 'columna 7', fila: 3, posicion: 7, status: 1, tipo: 1}
      ]
    }
  ];
  misClases: Array<ActClases> = [];
  clases: ActClases = new ActClases('', '', '', '', '', this.objEspacios);
  miCalendario: ActCalendario = new ActCalendario('', '', '', this.misClases);
  objClases: ActClases[] = [];

  objCalendario: any = [];
  cargando = false;
  usuarios: Usuario[];
  objClase: any = [];
  idClase = '';
  clasesDisp = 0;
  totalRegistros = 0;
  desde = 0;
  existeId = '';
  fechaVenc = new Date().toJSON().slice(0 , 10).replace(/-/g, '/');
  objDisponibilidad: any = [];
  mivar = '';
  disabled = false;
  adcolumna = 0;
  adposicion = 0;
  advaruno = '';
  advardos = '';
  advariable = '';
  adopcional = '';
  disciplinas: Disciplina;
  coaches: Coach;

  constructor(public calendarioService: CalendarioService,
              public usuarioService: UsuarioService,
              public coachService: CoachService,
              public disciplinaService: DisciplinaService
             ) { }

  ngOnInit() {
    this.traerDatos();
    this.getCoaches();
    this.getDisciplinas();
  }
  busquedaUsuario(termino: string) {
    if (termino === '') {
      this.traerDatos();
      return;
    }
    this.usuarioService.buscarUsuario(termino)
          .subscribe((usuario: Usuario[]) => {
            this.usuarios = usuario;
            console.log(usuario);
    });
  }
  daUsuario(termino: string) {
    if (termino === '') {
      this.traerDatos();
      return;
    }
    this.usuarioService.buscarUsuario(termino)
          .subscribe((usuario: Usuario[]) => {
            this.usuarios = usuario;
            console.log(usuario);
    });
  }
  getCoaches() {
    this.coachService.getCoaches()
    .subscribe( (data: any) => {
    this.coaches = data.coaches;
    });
  }
  getDisciplinas() {
    this.disciplinaService.getDisciplinas()
    .subscribe( (data: any) => {
     this.disciplinas = data.disciplinas;
    });
  }
  traerDatos() {
    this.calendarioService.getCalendario(this.desde)
    .subscribe( (data: any) => {
    console.log(data);
    this.objCalendario = data.calendario;
    this.totalRegistros = data.total;
    });
  }
  abrirModal(id: string) {
    this.traerDatos();
    this.idClase = id;
    console.log(id);
    this.calendarioService.getClase(id)
    .subscribe( (data: any) => {
      console.log( data.calendario );
      this.objClase = data.calendario;
    });
}
apartarLugar(columna: number, posicion: number, varuno: string, vardos: string, variable: string, opcional: string) {
  this.adcolumna = columna;
  this.adposicion = posicion;
  this.advaruno = varuno;
  this.advardos = vardos;
  this.advariable = variable;
  this.adopcional = opcional;

  if (this.adopcional !== undefined) {
    swal.fire({
      title: '¿Desea cancelar el lugar?',
      text: 'Se cancelará la reservación que había realizado.',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cancelar el lugar'
    }).then((result) => {
      if (result.value) {
        const apartar = new ApartarClase(
          this.advaruno,
          this.advardos,
          this.advariable,
          this.adopcional,
          this.adposicion,
          this.adcolumna,
          this.clasesDisp
        );
        this.calendarioService.cancelarLugar(apartar)
        .subscribe(resp => this.abrirModal(this.idClase));
        this.traerDatos();
      }
    });
    return false;
} else {
  document.getElementById('openModalButton').click();
}
  console.log(posicion);
  console.log(columna);
  console.log(varuno);
  console.log(vardos);
  console.log(variable);
  console.log(opcional);

}
cambiarDesde(numero: number = 0) {
  const midesde = this.desde + numero;
  console.log(midesde);
  console.log(numero);
  if (midesde >= this.totalRegistros) {
    return;
  }
  if (midesde < 0 ) {
    return;
  }
  this.desde = this.desde + numero;
  console.log('aqui desde' + this.desde);
  this.traerDatos();
  }
  miClase(someValue) {
    console.log('quiero saber quine soy: ' + someValue);
    if (someValue === this.existeId){
      return 'text-success';
    } else {
      return 'naranja';
    }
}
apartar(usuario: Usuario) {
console.log(usuario);
this.verificarDis(usuario);
let apartar = new ApartarClase(
  this.advaruno,
  this.advardos,
  this.advariable,
  usuario._id,
  this.adposicion,
  this.adcolumna,
  this.clasesDisp
);
swal.fire({
  title: '¿Desea apartar el lugar?',
  text: 'Se reservará este lugar para ti',
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, apartar el lugar'
}).then((result) => {
  console.log(result);
  if (result.value === true) {
    const apartar = new ApartarClase(
      this.advaruno,
      this.advardos,
      this.advariable,
      usuario._id,
      this.adposicion,
      this.adcolumna,
      this.clasesDisp
    );
    this.calendarioService.apartarLugar(apartar)
    .subscribe(resp => this.abrirModal(this.idClase));
    this.traerDatos();
  }
});
}
verificarDis(usuario: Usuario) {
  this.calendarioService.getDisponibilidad(usuario._id)
  .subscribe( (data: any) => {
    console.log(data.total);
    this.clasesDisp = data.total;
    if (this.clasesDisp === 0) {
      swal.fire(
        'No tiene clases disponibles',
        'Debe solicitar un paquete',
        'warning'
      );
      return false;
    }
  });
}
guardarCalendario() {
  console.log(this.miCalendario.fecha);
  const cale = new ActCalendario(
    '', this.nombreDia(), this.miCalendario.fecha, this.objClases
   );
  console.log(JSON.stringify(cale));
  this.calendarioService.guardarCalendario( cale )
      .subscribe( objeto => {
        console.log(objeto);
        this.traerDatos();
      });
}
disab() {
this.disabled = true;
const clases = new ActClases(
 '', this.clases.coachId, this.clases.disciplinaId, this.clases.horario, '5', this.objEspacios
);
this.misClases.push(clases);
this.objClases = this.misClases;
console.log(this.misClases);



}
nombreDia() {
  let date = new Date(this.miCalendario.fecha.replace(/-+/g, '/'));

  let options = {
    weekday: 'long'
  };
  console.log(date.toLocaleDateString('es-MX', options));
  return (date.toLocaleDateString('es-MX', options));
}
nuevo() {
  this.objClases = [];
  this.misClases = [];
  this.clases = new ActClases('', '', '', '', '', this.objEspacios);
  this.miCalendario = new ActCalendario('', '', '', this.misClases);
  this.disabled = false;
}
delItem(num: number) {
let num2 = num - 1;
console.log(num);
this.misClases.splice(num2, 1);
console.log(this.misClases);
this.objClases = this.misClases;


}
 demo(mifecha) {
  console.log(mifecha);
}


}
