import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./login.component.css']
})
export class RegistroComponent implements OnInit {

  forma: FormGroup;
  constructor( public usuarioService: UsuarioService,
               public router: Router
) { }

  sonIguales(campo1: string, campo2: string ) {
    return (group: FormGroup) => {
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;
      if ( pass1 === pass2 ) {
        return null;
      }
      return {
        sonIguales: true
      };
    };
  }

  ngOnInit() {

    this.forma =  new FormGroup({
      name: new FormControl(null, Validators.required),
      apellidoPaterno: new FormControl(null, Validators.required),
      apellidoMaterno: new FormControl(null),
      fechaNacimiento: new FormControl(null, Validators.required),
      genero: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, { validators: this.sonIguales('password', 'password2') });
  }
  registro() {
    if (this.forma.invalid ) {
      swal.fire('Proceso incompleto', 'Debe', 'warning');
      console.log('mal');
      return;
    }

    if (!this.forma.value.condiciones) {
      swal.fire('No completado', 'Debe aceptar los términos y condiciones', 'warning');
      return;
    }
    let usuario = new Usuario(
      this.forma.value.name,
      this.forma.value.apellidoPaterno,
      this.forma.value.apellidoMaterno,
      this.forma.value.fechaNacimiento,
      this.forma.value.genero,
      this.forma.value.email,
      this.forma.value.password,
      'xxx.jpg'
    );
    this.usuarioService.crearUsuario(usuario)
    .subscribe(resp => this.router.navigate(['/login']));
    console.log('Forma válida: ' + this.forma.valid);
    console.log(this.forma.value);
  }
}
