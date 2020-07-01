import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tortapalm',
  templateUrl: './tortapalm.component.html',
  styleUrls: ['./tortapalm.component.scss']
})
export class TortapalmComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  next() {
    this.router.navigateByUrl('/receitas/espaguete_carbonara');
  }
  prev() {
    this.router.navigateByUrl('/receitas/quibe_bandeja');
  }
  receita_1() {
    this.router.navigateByUrl('/receitas/strogonoff');
  }
  receita_2() {
    this.router.navigateByUrl('/receitas/feijoada');
  }
  receita_3() {
    this.router.navigateByUrl('/receitas/pernil_lanches');
  }
  tortapalm: any ='assets/img/receitas/1634005555@2x.png';
  calendario: any ='assets/icones_svg/calendario.svg';
  ingredientes: any ='assets/icones_svg/ingredientes.svg';
  preparo: any = 'assets/icones_svg/preparo.svg';
  seta_right: any = 'assets/icones_svg/seta_right.svg';
  seta_left: any = 'assets/icones_svg/seta_left.svg';
  strogonoff: any = 'assets/img/receitas/445762072.png';
  feijoada: any = 'assets/img/receitas/148093592.png';
  pernil: any = 'assets/img/receitas/1232386447.png';
  
  receita1 = 'FEIJOADA';
  receita2= "PERNIL PARA LANCHES";
  receita3 = 'QUIBE DE BANDEJA';
  receita4 = 'TORTA DE PALMITO';
  receita5= 'ESPAGUETE À CARBONARA';
  receita6 = 'STROGONOFF';
  m_prep = 'Modo de Preparo';
  ingre = 'Ingredientes';
  mas = 'Massa';
  rech = 'Recheio';
  mod = 'Modo de montar a Torta'
}
