import { Component } from '@angular/core';

@Component({
  selector: 'app-proximos-meses',
  standalone: true,
  imports: [],
  templateUrl: './proximos-meses.component.html',
  styleUrl: './proximos-meses.component.scss'
})
export class ProximosMesesComponent {

  mesesProximos: string[];

  constructor() {
      this.mesesProximos = this.getProximosMeses();
  }

  getProximosMeses(): string[] {
    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    const dataAtual = new Date();
    const indiceMesAtual = dataAtual.getMonth();
    const proximosMeses: string[] = [];

    for (let i = 0; i < 6; i++) {
        const indiceMes = (indiceMesAtual + (i+1)) % 12;
        proximosMeses.push(meses[indiceMes]);
    }

    return proximosMeses;
  }

  ngOnInit(){

    console.log(this.mesesProximos);
  }
}
