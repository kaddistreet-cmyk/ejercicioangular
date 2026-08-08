import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  private formBuilder = inject(FormBuilder);

  formularioContacto = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.maxLength(10)]],
  });

  enviar() {
    if (this.formularioContacto.valid) {
      alert('Gracias por contactar a Nomadaware');
    } else {
      alert('Los datos ingresados son incorrectos');
    }
  }
}
