import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ForgotPasswordPage implements OnInit {
  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() { }

  // Función que se ejecuta al hacer submit del formulario
  async onSubmit() {
    const email = (document.getElementById('email') as HTMLInputElement).value;

    if (this.validateEmail(email)) {
      const alert = await this.alertController.create({
        header: 'Reset Link Sent',
        message: 'A password reset link has been sent to your email.',
        buttons: ['OK']
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please enter a valid email address.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }

  // Función para validar el formato del correo
  validateEmail(email: string): boolean {
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  // Función para ir a la página de login
  login() {
    this.router.navigateByUrl("login");
  }

  // Función para ir a la página de sign-up
  onSignUp() {
    this.router.navigateByUrl("sign-up");
  }
}
