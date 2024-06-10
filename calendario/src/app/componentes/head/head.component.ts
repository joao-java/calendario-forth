import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-head',
  standalone: true,
  imports: [],
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {
  dias: number = 0;
  horas: number = 0;
  minutos: number = 0;
  segundos: number = 0;


  ngOnInit() {
    // Defina a data de destino para a contagem regressiva
    const dataAlvo = new Date("1 August 2024 01:00:00 GMT-0300").getTime();

    // Atualize a contagem regressiva a cada segundo
    setInterval(() => {
      const agora = new Date().getTime();
      const diferenca = dataAlvo - agora;

      this.dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      this.horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      this.segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    }, 1000);
  }
  getNomeMesAtual(): string {
    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    const dataAtual = new Date();
    const indiceMes = dataAtual.getMonth();
    return meses[indiceMes];
  }
  
}
