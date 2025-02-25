import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private apiKey: string = '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'

  constructor() { }

  async generateIdea(prompt: string): Promise<string> {
    const url = 'https://api.openai.com/v1/chat/completions'
    try {
      const response = await axios.post(url, {
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'Eres un generador de ideas' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 100,
        temperature: 0.7,
      }, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        }
      });
      console.log('Respuesta de OpenAI:', response.data);
      if (response.data && response.data.choices && response.data.choices[0].message) {
        return response.data.choices[0].message.content.trim();
      } else {
        console.error('La respuesta no tiene el formato esperado.');
        return 'hubo un error con la respueta de OpenAI.';
      }
    } catch (error) {
      console.error('error al generar la idea:', error);
      return 'Hubo un error generando la idea. Intenta nuevamente.'
    }
  }
}
