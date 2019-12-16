import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClienteComponent } from './cliente.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { sharedModule } from '../../shared/shared.module';
import { CUENTAS_ROUTES } from './cliente.routes';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { MatTabsModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { CoachesComponent } from './coaches/coaches.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ClasesComponent } from './clases/clases.component';
import { PerfilCoachComponent } from './perfil-coach/perfil-coach.component';
import { AdminCalendarioComponent } from './administrador/admin-calendario/admin-calendario.component';
import { AdminCoachesComponent } from './administrador/admin-coaches/admin-coaches.component';
import { AdminPaquetesComponent } from './administrador/admin-paquetes/admin-paquetes.component';
import { AdminDisciplinasComponent } from './administrador/admin-disciplinas/admin-disciplinas.component';
import { AdminUsuariosComponent } from './administrador/admin-usuarios/admin-usuarios.component';
import { PipesModule } from '../../pipes/pipes.module';
import { ModalUploadComponent } from 'src/app/components/modal-upload/modal-upload.component';





@NgModule({
  declarations: [
    UsuariosComponent,
    ProveedoresComponent,
    ClienteComponent,
    SolicitudComponent,
    DashboardComponent,
    CalendarioComponent,
    PaquetesComponent,
    CoachesComponent,
    PerfilComponent,
    ClasesComponent,
    PerfilCoachComponent,
    AdminCalendarioComponent,
    AdminCoachesComponent,
    AdminPaquetesComponent,
    AdminDisciplinasComponent,
    AdminUsuariosComponent,
    ModalUploadComponent

  ],
  imports: [
      sharedModule,
      CUENTAS_ROUTES,
      MatTabsModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      HttpClientModule,
      PipesModule
  ],
  exports: [
    UsuariosComponent,
    ProveedoresComponent,
    SolicitudComponent
  ],
  providers: [],
  bootstrap: []
})
export class ClienteModule {}
