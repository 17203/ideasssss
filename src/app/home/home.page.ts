import { Component } from '@angular/core';
import { IonContent, IonInput, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { OpenaiService } from '../openai.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service'; // Importamos AuthService

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonInput, IonCard, IonCardHeader, IonCardContent, IonCardTitle, FormsModule, CommonModule, IonItem, IonLabel, IonButton],
})
export class HomePage {
  ideaPrompt: string = '';
  generatedIdea: string = '';

  constructor(private router: Router, private openaiService: OpenaiService, private authService: AuthService) { }

  async generateIdea() {
    if (this.ideaPrompt.trim() == '') {
      alert('Por favor ingresa una idea inicial.');
      return;
    }
    this.generatedIdea = await this.openaiService.generateIdea(this.ideaPrompt);
  }

  onSignUp() {
    this.router.navigateByUrl("login");
  }

  async logout() {
    await this.authService.logout();
  }
}
