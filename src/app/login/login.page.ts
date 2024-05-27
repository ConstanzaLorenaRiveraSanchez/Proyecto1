import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  async ingresar() {
    // Validar campos
    if (this.validarUsuario() && this.validarContrasena()) {
//  Redirigir a la página home y pasar los datos de usuario
      this.router.navigate(['/home'], { state: { usuario: this.usuario } });
    } else {
      // Mostrar alerta de error
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario o contraseña inválidos.', 
        buttons: ['Cerrar']
      });
      await alert.present();
    }
  }

  validarUsuario(): boolean {
    // Validar longitud del usuario (entre 3 y 8 caracteres)
    return this.usuario.length >= 3 && this.usuario.length <= 8;
  }

  validarContrasena(): boolean {
    // Validar longitud de la contraseña (4 dígitos)
    return /^\d{4}$/.test(this.contrasena);
  }

}
