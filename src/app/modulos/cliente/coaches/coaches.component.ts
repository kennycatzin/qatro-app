import { Component, OnInit } from '@angular/core';
import { URL_SERVICIOS } from '../../../../config/config';
import { CoachService } from 'src/app/services/service.index';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./../cliente.component.css']
})
export class CoachesComponent implements OnInit {

  objCoaches: any[] = [];
  constructor(public coachService: CoachService) { }

  ngOnInit() {
    this.traerDatos();
  }
  traerDatos() {
    this.coachService.getCoaches()
    .subscribe( (data: any) => {
    console.log( data.coaches );
    this.objCoaches = data.coaches;
    });
  }
  kenny() {
    return URL_SERVICIOS;
  }
}
