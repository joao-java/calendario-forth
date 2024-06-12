import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './componentes/head/head.component';
import { PlantaPredioComponent } from './componentes/planta-predio/planta-predio.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TarefasService } from './tarefas.service';
import { Observable } from 'rxjs';
import { Tarefa } from './tarefa.model';
import { ProximosMesesComponent } from './componentes/proximos-meses/proximos-meses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HeadComponent, PlantaPredioComponent, FooterComponent, ProximosMesesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  simpleReqAgendamentosObs$!: Observable<Tarefa[]>;

  newlyAgendamentos: Tarefa[] = [];

  constructor(private tarefasService: TarefasService){}

  getSimpleHttpRequest(){
    this.simpleReqAgendamentosObs$ = this.tarefasService.getTarefas();
  }
  
  ngOnInit() {
    this.getSimpleHttpRequest();
  }

  saveAgendamento(name: string, dia: number, mes: number, sala: number, horaInicio: string, horaTermino: string) {
    let p = { name, dia, mes, sala, horaInicio, horaTermino }
    this.tarefasService.postTarafas(p)
    .subscribe(
      (p: Tarefa) => {
        console.log(p);
        this.newlyAgendamentos.push(p);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // -------------------------------------------------------------
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
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const hoje = new Date();
    const diaDaSemana = hoje.getDay();
    const diaSemanaAtual = diasDaSemana[diaDaSemana];
    return diaSemanaAtual;
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
    // console.log("feitoooooooooooooooooooooooo"+this.showInsert);
  }


}
