import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  imports: [],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {
  informacion = [
    {
      id: 1,
      titulo: 'Misión',
      descripcion: 'Ofrecer productos útiles y buena atención.',
      imagen: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/icons/bullseye.svg',
    },
    {
      id: 2,
      titulo: 'Visión',
      descripcion: 'Ser una empresa confiable en el área tecnológica.',
      imagen: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/icons/eye.svg',
    },
    {
      id: 3,
      titulo: 'Valores',
      descripcion: 'Responsabilidad, respeto y honestidad.',
      imagen: '',
    },
  ];
}
