import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-usuario-cliente',
  templateUrl: './usuario-cliente.component.html',
  styleUrls: ['./usuario-cliente.component.css']
})
export class UsuarioClienteComponent implements OnInit {
  private loggedIn: boolean;
  events: string[] = [];
  opened: boolean;

  constructor() { }

  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    // });
    
  }

}
