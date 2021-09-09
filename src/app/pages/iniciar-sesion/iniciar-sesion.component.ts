import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  login = {
    email: "",
    password: "",
  };
  constructor(public router: Router, public requestServ: RequestService) { }

  ngOnInit(): void {
  }
  async onLoggedin() {
    this.requestServ.LogingLoading = true
    const response: any = await this.requestServ.login(this.login)
    if (response[0]) {
      this.router.navigateByUrl("/noticias")
    }
    console.log(this.requestServ.nombre)

  }
}
