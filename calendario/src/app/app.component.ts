import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calendario';
  
  public diasNoMesAtual(){
    
    // quantidade de dias no mes
    const hoje = new Date();
    const ultimoDiaMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0).getDate();

    // dia da semana que começou o mes
    const primeiroDiaMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
    const diaDaSemana = primeiroDiaMes.getDay();
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    


    const diasDoMes: number[] = [];

    for (let dia = 1; dia <= ultimoDiaMes; dia++) {
      diasDoMes.push(dia);
      
    }

    return console.log(ultimoDiaMes, hoje.getDate(),diaDaSemana,diasDaSemana[diaDaSemana], diasDoMes)
  }
  
  diasNumber(): number[] {
    const hoje = new Date();
    const ultimoDiaMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0).getDate();

    const diasDoMes: number[] = [];

    for (let dia = 1; dia <= ultimoDiaMes; dia++) {
      diasDoMes.push(dia);
    }

    return diasDoMes;
  }

  getDayClass(dia: number): string {
    const hoje = new Date();
    const primeiroDiaMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
    const diaDaSemana = primeiroDiaMes.getDay();
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return `dia-${dia} start-from-column-${diasDaSemana[diaDaSemana]}`;
  }

  getDate(){
    
  }

  diaAtual = this.diasNoMesAtual();
}
