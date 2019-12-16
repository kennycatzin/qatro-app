import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../../../../models/disciplina.model';
import { DisciplinaService } from 'src/app/services/service.index';

@Component({
  selector: 'app-admin-disciplinas',
  templateUrl: './admin-disciplinas.component.html',
  styles: []
})
export class AdminDisciplinasComponent implements OnInit {
  objeto: Disciplina[] = [];
  totalRegistros = 0;
  desde = 0;
  cargando = false;
  imagenSubir: File;
  imagenTemp: string;
  // usuarioModify = this.disciplinaService.usuario;

  constructor(public disciplinaService: DisciplinaService) { }

  ngOnInit() {
  }

}
