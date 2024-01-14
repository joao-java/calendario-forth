import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private baseUrl = 'http://seu-servidor:porta';  // Substitua pelo endereço do seu servidor Node.js

  constructor(private http: HttpClient) {}

  getAgendamentos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/agendamento`);
  }
}
