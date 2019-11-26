import { Component, OnInit } from '@angular/core';
declare function init_plugins();

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
