import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Productos } from './productos/productos';  

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Productos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primer-proyecto-angular');
}
