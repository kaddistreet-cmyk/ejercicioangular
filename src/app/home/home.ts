import { Component, inject } from '@angular/core';
import { MisionVision } from '../service/mision-vision';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  imagenInicio = '/images/nomadaware-home.webp';

  servicios = [
    {
      id: 1,
      nombre: 'Componentes',
      descripcion: 'Memorias, discos y otros productos.',
      imagen:
        'https://nomadaware.com.ec/wp-content/uploads/NomadaWare_tarjeta_de_video_asus_rog_nvidia_rtx_4090_24gb_oc.png',
    },
    {
      id: 2,
      nombre: 'Equipos',
      descripcion: 'Opciones para el hogar, estudio y trabajo.',
      imagen:
        'https://nomadaware.com.ec/wp-content/uploads/NomadaWare_audifono_hyperx_cloud_core_dts-2.png',
    },
    {
      id: 3,
      nombre: 'Atención',
      descripcion: 'Información sencilla para cada compra.',
      imagen: '',
    },
    
  ];

  private misionVisionService = inject(MisionVision);

  informacion = this.misionVisionService.obtenerInformacion();
}
