import { Component, inject } from '@angular/core';
import { Producto } from '../service/producto';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  private productoService = inject(Producto);

  productos: any[] = [];

  ngOnInit() {
    this.productoService.obtenerProductos().subscribe((data => {
      this.productos = data;
    }))
  }

  nombre: string = 'Mauricio';
  edad: number = 30;
}
