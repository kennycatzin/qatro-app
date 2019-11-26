import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from 'src/app/services/service.index';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from '../../../../config/config';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit { 
  objDisciplinas: any[] = [];
  constructor(public disciplinaService: DisciplinaService,
              public router: Router) { }

  ngOnInit() {
    this.traerDatos();
    console.log(URL_SERVICIOS);
  }
  traerDatos() {
    this.disciplinaService.getDisciplinas()
    .subscribe( (data: any) => {
    console.log( data.disciplinas );
    this.objDisciplinas = data.disciplinas;
    });
  }
  kenny() {
    return URL_SERVICIOS;
  }
}
