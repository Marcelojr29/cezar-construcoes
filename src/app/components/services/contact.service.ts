import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/api/send-email`;

  constructor(private http: HttpClient) { }

  enviarEmail(dados: any): Observable<any> {
    return this.http.post(this.apiUrl, dados);
  }
}
