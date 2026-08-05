import { Component } from '@angular/core';
import { TarjetaProducto } from '../tarjeta-producto/tarjeta-producto';

@Component({
  selector: 'app-productos',
  imports: [TarjetaProducto],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {}
