import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  productos = [
    {
      id: 1,
      nombre: 'Ram So-Dimm 16GB 5600mz',
      precio: 225,
      stock: 0,
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJN4j050eCXoGQ3tJdb2Hxeeby0aLjzkOQ2Jr7kqvwbg6OsIZlNlaWhw&s=10',
    },
    {
      id: 2,
      nombre: 'Disco Duro 1TB nvme',
      precio: 212,
      stock: 8,
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_677144-MLA99505933366_112025-F.webp',
    },
    {
      id: 3,
      nombre: 'Disco Duro 2TB SATA',
      precio: 250,
      stock: 10,
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8uQIuswTAc0QNRApS3OKxzgx4n2qTGXAnVRblwOel1g&s=10',
    },
    {
      id: 4,
      nombre: 'Ram So-Dimm 32GB 5600mz',
      precio: 400,
      stock: 15,
      imagen:
        'https://nomadaware.com.ec/wp-content/uploads/NomadaWare_ram_kingston_32gb_ddr5_so-dimm-1.png',
    },
    {
      id: 5,
      nombre: 'Monitor 24',
      precio: 250,
      stock: 0,
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYpPCyIiZFhD6gjppu_02CJd-sv4YDiIjLKYgFkPYybfXt1Mh6MyGoHw8U&s=10',
    },
  ];

  nombre: string = 'Mauricio';
  edad: number = 30;
}
