import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina2.html',
  styleUrls: ['./pagina2.css']
})
export class Pagina2 {
  successMessage = '';
  errorMessage = '';

  async sendContact(event: Event) {
    event.preventDefault();
    this.successMessage = '';
    this.errorMessage = '';

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      // Sostituisci YOUR_FORMSPREE_ID con il tuo ID/endpoint reale.
      const res = await fetch('https://formspree.io/f/xovpgdya', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (res.ok) {
        this.successMessage = 'Messaggio inviato correttamente. Ti risponderemo presto.';
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        this.errorMessage = data?.error || 'Si è verificato un errore durante l\'invio.';
      }
    } catch (e) {
      this.errorMessage = 'Errore di rete. Riprova più tardi.';
    }

    // rimuovi i messaggi dopo pochi secondi
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 8000);
  }
}
