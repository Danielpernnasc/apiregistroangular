import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strogonoff',
  templateUrl: './strogonoff.component.html',
  styleUrls: ['./strogonoff.component.scss']
})
export class StrogonoffComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  next() {
    this.router.navigateByUrl('/receitas/feijoada');
  }
  prev() {
    this.router.navigateByUrl('/receitas/espaguete_carbonara');
  }
  receita_1() {
    this.router.navigateByUrl('/receitas/pernil_lanches');
  }
  receita_2() {
    this.router.navigateByUrl('/receitas/quibe_bandeja');
  }
  receita_3() {
    this.router.navigateByUrl('/receitas/torta_palmito');
  }
  strogonoff: any ='assets/img/receitas/445762072@2x.png';
  calendario: any ='assets/icones_svg/calendario.svg';
  ingredientes: any ='assets/icones_svg/ingredientes.svg';
  preparo: any = 'assets/icones_svg/preparo.svg';
  seta_right: any ='assets/icones_svg/seta_right.svg';
  seta_left: any ='assets/icones_svg/seta_left.svg';
  pernil: any = 'assets/img/receitas/1232386447.png';
  quibebandeja: any ='assets/img/receitas/186024809.png';
  tortapalm: any ='assets/img/receitas/1634005555.png';

  mod = 'Modo de Preparo'
  receita1 = 'FEIJOADA';
  receita2= "PERNIL PARA LANCHES";
  receita3 = 'QUIBE DE BANDEJA';
  receita4 = 'TORTA DE PALMITO';
  receita5= 'ESPAGUETE À CARBONARA';
  receita6 = 'STROGONOFF';

}
