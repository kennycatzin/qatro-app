import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService,
         SidebarService,
         UsuarioService,
         LoginGuardGuard,
         PaqueteService,
         CoachService,
         AdminGuard,
         SubirArchivoService,
         CalendarioService,
         DisciplinaService } from './service.index';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard,
    PaqueteService,
    DisciplinaService,
    CoachService,
    AdminGuard,
    CalendarioService,
    SubirArchivoService
    ]
})
export class ServiceModule { }
