import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any = []
  constructor(private requestServ: RequestService) { }

  ngOnInit(): void {
    this.getProductos();
  }
  async getProductos() {
    const response: any = await this.requestServ.getProductos();
    if (response[0]) {
      this.productos = response[1];
    }
  }

}
