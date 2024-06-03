import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {
  
  // Declaración del arreglo para almacenar los elementos del checklist
  checklist: string[] = [];

  // Variable para almacenar el nuevo artículo
  nuevoArticulo: string = '';

  constructor() { }

  ngOnInit() {}

  // Método para agregar un nuevo elemento al arreglo
  agregarElemento() {
    if (this.nuevoArticulo.trim() !== '') {
      this.checklist.push(this.nuevoArticulo);
      this.nuevoArticulo = ''; // Limpiar el campo después de agregar el artículo
    }
  }
    // Método para marcar un elemento como completado (borrarlo)
    marcarElemento(elemento: string) {
      const index = this.checklist.indexOf(elemento);
      if (index !== -1) {
        this.checklist.splice(index, 1); // Eliminar el elemento del arreglo
      }
    }
  }
