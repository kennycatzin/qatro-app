import { Component, OnInit } from '@angular/core';
import { PaqueteService, UsuarioService } from 'src/app/services/service.index';
import { Paquete } from '../../../../models/paquete.model';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../../../models/usuario.model';
import { CargarPaquete } from '../../../../models/cargarPaquete.model';

@Component({
  selector: 'app-admin-paquetes',
  templateUrl: './admin-paquetes.component.html',
  styles: []
})
export class AdminPaquetesComponent implements OnInit {
  cargando = false;
  paquetes: Paquete[];
  usuarios: Usuario[];
  cargarPaquete: CargarPaquete;
  valorId = '';
  paqueteG: Paquete = new Paquete('', 0, 0, 0);
  valorTotal = 0;
  totalRegistros = 0;
  desde = 0;

  nombrePaquete = '';
  numeroClases = 0;
  vigencia = 0;
  precioUnitario = 0;
  constructor( public paqueteService: PaqueteService,
               public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.traerDatos();
  }
  traerDatos() {
    this.cargando = true;
    this.paqueteService.getPaquetesAdmin(this.desde)
    .subscribe( (data: any) => {
      this.paquetes = data.paquetes;
      this.totalRegistros = data.numero;
      this.cargando = false;
    });
  }
  borrar(paquete: Paquete) {
    swal.fire({
      title: '¿Desea confirmar?',
      text: 'Se eliminará este usuario permanentemente',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
      if (result.value) {
       this.paqueteService.borrar(paquete._id)
         .subscribe(resp => {
           this.traerDatos();
         });
      }
    });
  }
  actualizar(paquete: Paquete) {
    this.paqueteG = paquete;
    this.valorTotal = Math.round(paquete.numeroClases * paquete.precioUnitario);
    console.log(paquete);
  }
  busqueda(termino: string) {
    if (termino === '') {
      this.traerDatos();
      return;
    }
    this.paqueteService.busqueda(termino)
          .subscribe((paquete: Paquete[]) => {
            this.paquetes = paquete;
    });
  }
  cambiarDesde(numero: number) {
    let desde = this.desde + numero;
    if (desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0 ) {
      return;
    }
    this.desde += numero;
    this.traerDatos();
  }
  guardarElemento(f: NgForm) {
    if ( f.invalid ) {
      return;
    }
    console.log(this.paqueteG);
    if (this.paqueteG._id) {
      this.paqueteService.actualizar(this.paqueteG._id, this.paqueteG)
      .subscribe( objeto => {
        console.log(objeto);
        this.traerDatos();
      });
    } else {
      this.paqueteService.crearPaquete( this.paqueteG )
      .subscribe( objeto => {
        console.log(objeto);
        this.traerDatos();
      });
    }
  }
  nuevo() {
    this.paqueteG = new Paquete('', 0, 0, 0);
    this.valorTotal = 0;
  }
  cargaPaquetes(paquete: Paquete) {
    console.log(paquete);
    this.nombrePaquete = paquete.nombre;
    this.numeroClases = paquete.numeroClases;
    this.vigencia = paquete.vigencia;
    this.precioUnitario = paquete.precioUnitario;
    this.valorId = paquete._id;
    this.valorTotal = Math.round(paquete.numeroClases * paquete.precioUnitario);
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
  comprar(usuario: Usuario) {
    swal.fire({
      title: '¿Desea confirmar?',
      text: 'Se cargará el paquete a este usuario',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cargar'
    }).then((result) => {
      if (result.value) {
       let carga = new CargarPaquete(
         '', usuario._id, this.valorId, this.sumDias(), this.numeroClases
        );
       this.paqueteService.comprar(carga)
         .subscribe(resp => {
           this.traerDatos();
         });
      }
    });
  }
  sumDias() {
    let fecha = new Date();
    let dias = this.vigencia; // Número de días a agregar
    fecha.setDate(fecha.getDate() + dias);
    return (fecha.toISOString().slice(0, 10 ));
  }
}
