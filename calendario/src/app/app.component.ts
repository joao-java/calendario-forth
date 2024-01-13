import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './componentes/head/head.component';
import { PlantaPredioComponent } from './componentes/planta-predio/planta-predio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeadComponent, PlantaPredioComponent],
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
    const primeiroDiaMes = new Date(hoje.getFullYear(), 1);
    const diaDaSemana = primeiroDiaMes.getDay();
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    


    const diasDoMes: number[] = [];

    for (let dia = 1; dia <= ultimoDiaMes; dia++) {
      diasDoMes.push(dia);
      
    }

    return console.log("Ultimo dia do mes: "+ ultimoDiaMes +"\n"
    ,"Hoje: "+ hoje.getDate() +"\n"
    ,"dia da semana em numero: "+ diaDaSemana +"\n"
    ,"dia da semana: "+diasDaSemana[diaDaSemana+1] +"\n"
    ,"mes atual: "+(hoje.getMonth()+1) +"\n"
    , "todos dias do mes: "+ diasDoMes)
  }

  //dia atual
  diaAtuall():number{
    const hoje = new Date();
    return hoje.getDate();
  }

  //dias da semana em numero
  getDayColunClass():string  {
    const hoje = new Date();
    return `start-from-column-${hoje.getDay()}`;
  }
  
  //semana atual
  getSemanaAtual():string{
    const hoje = new Date();
    const primeiroDiaMes = new Date(hoje.getFullYear(), 1);
    const diaDaSemana = primeiroDiaMes.getDay();
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const diaDaSemanaAtual = diasDaSemana[diaDaSemana+2];

    return diaDaSemanaAtual;
  }
  //função me retorna a quantidade de dias no mes
  diasNumber(): number[] {
    const hoje = new Date();
    const ultimoDiaMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0).getDate();

    const diasDoMes: number[] = [];

    for (let dia = 1; dia <= ultimoDiaMes; dia++) {
      diasDoMes.push(dia);
    }

    return diasDoMes;
  }

  //
  getDayClass(dia: number): string {
    const hoje = new Date();
    const primeiroDiaMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
    const diaDaSemanaa = primeiroDiaMes.getDay();
    const diasDaSemanaa = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    
    return `dia-${dia} start-from-column-${diasDaSemanaa[diaDaSemanaa]}`;
  }
  diaAtual = this.diasNoMesAtual();
  
  showInsert = false;
  toggleInsert(){
    this.showInsert = !this.showInsert;
    console.log("feitoooooooooooooooooooooooo"+this.showInsert);
  }

  formData = {
    nome:'re',
    dia:9,
    mes:10,
    sala:11,
    horaInicial:'1',
    horaTermino:'321'
  };
  enviarFormulario(){
    console.log('Dados do formulario: '+ this.formData);
  }

  dados: any;
  agendado() {
    
    this.dados = {
      0:{
      dia:21,
      mes:'1',
      nome: 'John Doe',
      horario: 25,
      id:'211'
      },
      1:{
        dia:20,
        mes:'1',
        nome: 'John Doe',
        horario: 25,
        id:'211'
      }
    } 
  }

}
