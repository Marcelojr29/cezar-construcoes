import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactService } from '../services/contact.service'; // Correct import path
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService, // Inject ContactService here!
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.snackBar.open('Por favor, preencha todos os campos corretamente.', 'Fechar', {
        duration: 3000,
      });
      return;
    }

    this.isLoading = true;

    this.http.post('https://cezar-backend.vercel.app/api/send-email', this.contactForm.value).subscribe( // Use the injected service
      (response) => {
        this.snackBar.open('Formulário enviado com sucesso!', 'Fechar', {
          duration: 3000,
        });
        this.contactForm.reset();
        this.isLoading = false;
      },
      (error) => {
        this.snackBar.open('Erro ao enviar formulário. Tente novamente.', 'Fechar', {
          duration: 3000,
        });
        this.isLoading = false;
      }
    );
  }
}
