import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth, private router: Router, private alertController: AlertController) { }

  // Registro de usuario
  async register(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      await this.showAlert('Success', 'Account created successfully!');
      this.router.navigate(['/home']);
    } catch (error) {
    }
  }

  // Inicio de sesión
  async login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      await this.showAlert('Success', 'Login successful!');
      this.router.navigate(['/home']);
    } catch (error) {
      await this.showAlert('Error', 'Invalid credentials.');
    }
  }

  // Restablecer contraseña
  async resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(this.auth, email);
      await this.showAlert('Success', 'Password reset email sent.');
    } catch (error) {

    }
  }

  // Cierre de sesión
  async logout() {
    try {
      await signOut(this.auth);
      this.router.navigate(['/login']);
    } catch (error) {
    }
  }

  // Mostrar alertas
  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
