import { Component, OnInit } from '@angular/core';
import { UsuarioService, SidebarService } from '../../services/service.index';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
obj: any [];
  constructor( public sidebarService: SidebarService,
               public usuarioService: UsuarioService) {
               }

  ngOnInit() {
    this.cargarMenu();
  }
cargarMenu() {
  this.obj = this.usuarioService.menu;

}
}
