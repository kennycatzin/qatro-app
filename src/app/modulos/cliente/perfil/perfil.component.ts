import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/usuario.model';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  forma: FormGroup;
  usuario: Usuario;
  constructor(public usuarioService: UsuarioService) { 
    this.usuario = this.usuarioService.usuario;
  }
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
  actualizarUsuario(usuario: Usuario) {
    this.usuario.name = usuario.name;
    this.usuario.apellidoPaterno = usuario.apellidoPaterno;
    this.usuario.apellidoMaterno = usuario.apellidoMaterno;
    this.usuario.fechaNacimiento = usuario.fechaNacimiento;
    this.usuario.genero = usuario.genero;
    this.usuarioService.actualizarUsuario(this.usuario)
    .subscribe();
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
    }, { validators: this.sonIguales('password', 'password2') });  }

}
