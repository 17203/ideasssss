import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.css'],
  imports: [CommonModule,FormsModule, IonHeader, IonToolbar, IonTitle, IonContent]
})
export class SignUpPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  async onSubmit() {
    try {
      await this.authService.register(this.email, this.password);
      const alert = await this.alertController.create({
        header: 'Success',
        message: 'Your account has been created successfully!',
        buttons: ['OK'],
      });
      await alert.present();
      this.router.navigate(['/login']); // Redirigir al login después del registro
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'An error occurred during sign-up.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  // Función para validar el formato del correo
  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email); // Retorna true si el correo es válido
  }

  // Función para navegación
  goToSignIn() {
    this.router.navigateByUrl('/login');
  }
}
