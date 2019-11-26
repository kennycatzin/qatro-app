import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Calendario',
      url: '/calendario'
    },
    {
      titulo: 'Coaches',
      url: '/coaches'
    },
    {
      titulo: 'Paquetes',
      url: '/paquetes'
    }
  ];
  constructor() { }
}
