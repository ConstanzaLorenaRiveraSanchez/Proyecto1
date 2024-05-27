import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: string = ''; // Inicialización de la propiedad usuario
  animarLimpiar: boolean = false; // Bandera para activar la animación

  data: {
    nombre: string,
    apellido: string,
    education: string,
    nacimiento: string
  } = {
    nombre: '',
    apellido: '',
    education: '',
    nacimiento: ''
  };

  niveles: any[] = [
    {id:1, nivel:"Basica Incompleta"},
    {id:2, nivel:"Basica Completa"},
    {id:3, nivel:"Media Incompleta"},
    {id:4, nivel:"Media Completa"},
    {id:5, nivel:"Media Incompleta"},
    {id:6, nivel:"Superior Completa"}
  ];

  constructor(private route: ActivatedRoute, private alertController: AlertController) {}

  limpiar() {
    // Activar la animación
    this.animarLimpiar = true;

    // Limpiar los campos después de 1 segundo
    setTimeout(() => {
      this.data.nombre = '';
      this.data.apellido = '';
      this.data.education = '';
      this.data.nacimiento = '';
      this.animarLimpiar = false; // Desactivar la animación
    }, 1000);
  }

  async mostrar() {
    // Validar que se haya ingresado el nombre y apellido
    if (!this.data.nombre || !this.data.apellido) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingrese el nombre y el apellido.',
        buttons: ['Cerrar']
      });
      await alert.present();
      return;
    }

    // Mostrar la información (nombre y apellido) en un mensaje emergente
    const alert = await this.alertController.create({
      header: 'Usuario',
      message: `Su nombre es: ${this.data.nombre} ${this.data.apellido}`,
      buttons: ['Cerrar']
    });
    await alert.present();
  }

  ngOnInit() {
    // Obtener el usuario del estado de la navegación
    const state = window.history.state;
    if (state && state.usuario) {
      this.usuario = state.usuario;
    }
  }
}
