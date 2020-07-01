import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quibe',
  templateUrl: './quibe.component.html',
  styleUrls: ['./quibe.component.scss']
})
export class QuibeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  next() {
    this.router.navigateByUrl('/receitas/torta_palmito');
  }
  prev() {
    this.router.navigateByUrl('/receitas/pernil_lanches');
  }
  receita_1() {
    this.router.navigateByUrl('/receitas/espaguete_carbonara');
  }
  receita_2() {
    this.router.navigateByUrl('/receitas/strogonoff');
  }
  receita_3() {
    this.router.navigateByUrl('/receitas/feijoada');
  }
  quibe: any = 'assets/img/receitas/186024809@2x.png';
  calendario: any ='assets/icones_svg/calendario.svg';
  ingredientes: any ='assets/icones_svg/ingredientes.svg';
  seta_right: any = 'assets/icones_svg/seta_right.svg';
  seta_left: any = 'assets/icones_svg/seta_left.svg';
  espaguetecarbonara: any = 'assets/img/receitas/522337612.png';
  strogonoff: any = 'assets/img/receitas/445762072.png';
  feijoada: any = 'assets/img/receitas/148093592.png';
  preparo: any = 'assets/icones_svg/preparo.svg';

  receita1 = 'FEIJOADA';
  receita2= "PERNIL PARA LANCHES";
  receita3 = 'QUIBE DE BANDEJA';
  receita4 = 'TORTA DE PALMITO';
  receita5= 'ESPAGUETE À CARBONARA';
  receita6 = 'STROGONOFF';
  m_prep = 'Modo de Preparo';
  ingre = 'Ingredientes';
  mas = 'Massa do Quibe';
  rech = 'Recheio';

}
