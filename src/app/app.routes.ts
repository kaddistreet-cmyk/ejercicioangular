import { Routes } from '@angular/router';
import { Contacto } from './contacto/contacto';
import { Home } from './home/home';
import { Nosotros } from './nosotros/nosotros';
import { Productos } from './productos/productos';

export const routes: Routes = [
  { path: '', component: Home, title: 'Inicio | Nomadaware' },
  { path: 'productos', component: Productos, title: 'Productos | Nomadaware' },
  { path: 'nosotros', component: Nosotros, title: 'Nosotros | Nomadaware' },
  { path: 'contacto', component: Contacto, title: 'Contacto | Nomadaware' },
  { path: '**', component: Home },
];
