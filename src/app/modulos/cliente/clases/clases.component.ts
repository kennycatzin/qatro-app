import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from 'src/app/services/service.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./../cliente.component.css']

})
export class ClasesComponent implements OnInit {
  objDisciplinas: any[] = [];

  constructor(public disciplinaService: DisciplinaService,
              public router: Router) { }

  ngOnInit() {
    this.traerDatos();
  }
  traerDatos() {
    this.disciplinaService.getDisciplinas()
    .subscribe( (data: any) => {
    console.log( data.disciplinas );
    this.objDisciplinas = data.disciplinas;
    });
  }

}
