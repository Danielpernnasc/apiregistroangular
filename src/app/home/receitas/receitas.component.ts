import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  feijoada: any = "assets/img/receitas/148093592.png";
  lanche_pernil: any = 'assets/img/receitas/1232386447.png';
  quibe_bandeja: any = 'assets/img/receitas/186024809.png';
  calendario: any = 'assets/icones_svg/calendario.svg';
  torta_palmito: any = 'assets/img/receitas/1634005555.png';
  espaguete_carbo: any ='assets/img/receitas/522337612.png';
  strogonoff: any = 'assets/img/receitas/445762072.png';
}
