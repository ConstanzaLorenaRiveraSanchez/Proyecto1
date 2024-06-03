import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.page.html',
  styleUrls: ['./recordatorios.page.scss'],
})
export class RecordatoriosPage implements OnInit {
  
  // Arreglo para almacenar los recordatorios
  recordatorios: string[] = [];

  // Variable para almacenar el nuevo recordatorio ingresado por el usuario
  nuevoRecordatorio: string = '';

  constructor() { }

  ngOnInit() {}

  // Método para agregar un nuevo recordatorio
  agregarRecordatorio() {
    if (this.nuevoRecordatorio.trim() !== '') {
      this.recordatorios.push(this.nuevoRecordatorio);
      this.nuevoRecordatorio = ''; // Limpiar el campo después de agregar el recordatorio
    }
  }
}
