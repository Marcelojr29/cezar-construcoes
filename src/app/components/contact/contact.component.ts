import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  onSubmit() {
    const { name, email, phone, message } = this.formData;

    if (name && email && phone && message) {
      console.log('Formulário enviado com sucesso:', this.formData);
      alert('Formulário enviado com sucesso!');

      // Limpa os campos após o envio
      this.formData = { name: '', email: '', phone: '', message: '' };
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}
