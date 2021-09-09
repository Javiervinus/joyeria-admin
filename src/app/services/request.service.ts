import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  master: any;
  public nombre: string = "Invitado"
  public LogingLoading = false;
  loading = false;
  constructor(private http: HttpClient, private router: Router) {
    this.cargarStorage();
  }
  cargarStorage() {
    if (localStorage.joyeria) {
      console.log("entrS")
      this.master = JSON.parse(localStorage.joyeria);
      this.nombre = this.master.name;
    }
  }
  guardarStorage(data: any) {
    this.master = data;
    console.log(this.master);
    this.nombre = this.master.name;
    localStorage.setItem("joyeria", JSON.stringify(data));
  }
  cerrarSesion() {
    this.master = null;
    this.nombre = "Invitado"
    localStorage.removeItem("joyeria");
    this.router.navigateByUrl("/home/iniciarSesion");
  }
  tokenIsValid(status: number) {
    if (status === 401) {
      this.cerrarSesion();
      return false;
    }
    return true;
  }
  async login(data: any) {
    this.loading = true;
    return new Promise((resolve) => {
      this.http
        .post(`${environment.apiUrl}/auth/login`, data)
        .subscribe(
          (response: any) => {
            this.loading = false;
            const user = {
              ...response.data,
              token: response.data.api_token,
            };
            this.guardarStorage(user);
            setTimeout(() => (this.LogingLoading = false), 1500);
            resolve([true, null]);
          },
          (error: any) => {
            this.loading = false;
            resolve([false, "Error en las credenciales"]);
          }
        );
    });
  }
  async getProductos() {
    this.loading = true;
    if (!this.master.token) {
      this.loading = false;
      this.router.navigateByUrl("/login");
    } else {
      this.loading = true;
      const headers = new HttpHeaders({ token: this.master.token });
      return new Promise((resolve) => {
        this.http
          .get(`${environment.apiUrl}/producto`, { headers })
          .subscribe(
            (response: any) => {
              this.loading = false;
              resolve([true, response.data]);
            },
            (error: any) => {
              this.loading = false;
              if (!this.tokenIsValid(error.status)) {
              }
              resolve([false]);
            }
          );
      });
    }
  }

}
