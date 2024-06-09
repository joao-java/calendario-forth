import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  readonly url: string = 'http://localhost:3000'
  
  constructor(private http: HttpClient) { }

  getTarefas(): Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(`${this.url}/agendamentos` );
  }

  postTarafas(p: Tarefa): Observable<Tarefa>{
    return this.http.post<Tarefa>(`${this.url}/agendamentos`, p);
  }
}
 