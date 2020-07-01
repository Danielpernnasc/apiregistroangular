import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pernil',
  templateUrl: './pernil.component.html',
  styleUrls: ['./pernil.component.scss']
})
export class PernilComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  next() {
    this.router.navigateByUrl('/receitas/quibe_bandeja');
  }
  prev() {
    this.router.navigateByUrl('/receitas/feijoada');
  }
  receita_1() {
    this.router.navigateByUrl('/receitas/torta_palmito');
  }
  receita_2() {
    this.router.navigateByUrl('/receitas/espaguete_carbonara');
  }
  receita_3() {
    this.router.navigateByUrl('/receitas/strogonoff');
  }
  pernil: any = 'assets/img/receitas/1232386447@2x_maior.png';
  calendario: any ='assets/icones_svg/calendario.svg';
  ingredientes: any = 'assets/icones_svg/ingredientes.svg';
  preparo: any = 'assets/icones_svg/preparo.svg';
  seta_right: any ='assets/icones_svg/seta_right.svg';
  seta_left: any ='assets/icones_svg/seta_left.svg';
  tortapalm: any ='assets/img/receitas/1634005555.png';
  espcarbo: any ='assets/img/receitas/522337612.png';
  strogon: any ='assets/img/receitas/445762072.png';

  receita1 = 'FEIJOADA';
  receita2= "PERNIL PARA LANCHES";
  receita3 = 'QUIBE DE BANDEJA';
  receita4 = 'TORTA DE PALMITO';
  receita5= 'ESPAGUETE À CARBONARA';
  receita6 = 'STROGONOFF';

}
