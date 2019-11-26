import { Routes, RouterModule, Router } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { LoginGuardGuard, AdminGuard } from '../../services/service.index';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { CoachesComponent } from './coaches/coaches.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { ClasesComponent } from './clases/clases.component';
import { PerfilCoachComponent } from './perfil-coach/perfil-coach.component';
import { AdminCalendarioComponent } from './administrador/admin-calendario/admin-calendario.component';
import { AdminCoachesComponent } from './administrador/admin-coaches/admin-coaches.component';
import { AdminDisciplinasComponent } from './administrador/admin-disciplinas/admin-disciplinas.component';
import { AdminPaquetesComponent } from './administrador/admin-paquetes/admin-paquetes.component';
import { AdminUsuariosComponent } from './administrador/admin-usuarios/admin-usuarios.component';
const cuentasRoutes: Routes = [
    {
        path: '',
        component: ClienteComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'proveedores', component:  ProveedoresComponent},
            { path: 'usuarios', component: UsuariosComponent },
            { path: 'clases', component: ClasesComponent },
            { path: 'solicitudes', component: SolicitudComponent },
            { path: 'inicio', component:  DashboardComponent},
            { path: 'perfil', component: PerfilComponent },
            { path: 'perfil_coach', component: PerfilCoachComponent },
            { path: 'calendario', component: CalendarioComponent },
            { path: 'coaches', component:  CoachesComponent},
            { path: 'paquetes', component:  PaquetesComponent},
            { path: 'admin_calendario', component:  AdminCalendarioComponent, canActivate: [ AdminGuard ]},
            { path: 'admin_coaches', component:  AdminCoachesComponent, canActivate: [ AdminGuard ]},
            { path: 'admin_disciplinas', component:  AdminDisciplinasComponent, canActivate: [ AdminGuard ]},
            { path: 'admin_paquetes', component:  AdminPaquetesComponent, canActivate: [ AdminGuard ]},
            { path: 'admin_usuarios', component:  AdminUsuariosComponent, canActivate: [ AdminGuard ]},

            { path: '', redirectTo: '/login', pathMatch: 'full'},

        ]
    },
];
export const CUENTAS_ROUTES = RouterModule.forChild( cuentasRoutes );
