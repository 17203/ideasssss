import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonInput, IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';
import { OpenaiService } from '../openai.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonInput, IonCard, IonCardHeader, IonCardContent, IonCardTitle, FormsModule, CommonModule],
})
export class HomePage {
  constructor(private router: Router, private OpenaiService: OpenaiService) { }
  ideaPrompt: string = '';
  generatedIdea: string = '';

  async generateIdea() {
    if (this.ideaPrompt.trim() == '') {
      alert('Por favor ingresa una idea inicial.');
      return;
    }
    this.generatedIdea = await this.OpenaiService.generateIdea(this.ideaPrompt);
  }
}
