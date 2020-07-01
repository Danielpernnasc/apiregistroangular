import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feijoada',
  templateUrl: './feijoada.component.html',
  styleUrls: ['./feijoada.component.scss']
})
export class FeijoadaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  prev_next() {
    this.router.navigateByUrl('/receitas/pernil_lanches');
  }
  receita_1() {
    this.router.navigateByUrl('/receitas/quibe_bandeja');
  }
  receita_2() {
    this.router.navigateByUrl('/receitas/torta_palmito');
  }
  receita_3() {
    this.router.navigateByUrl('/receitas/espaguete_carbonara');
  }
  feijoada: any = 'assets/img/receitas/feijoada_148093592@2x.png';
  calendario: any ='assets/icones_svg/calendario.svg';
  ingredientes: any ='assets/icones_svg/ingredientes.svg';
  preparo: any = 'assets/icones_svg/preparo.svg';
  seta_left: any = 'assets/icones_svg/seta_left.svg';
  seta_right: any = 'assets/icones_svg/seta_right.svg';
  quibebandeja: any = 'assets/img/receitas/186024809.png';
  tortapalmito: any = 'assets/img/receitas/1634005555.png';
  espaguetecarbonara: any ='assets/img/receitas/522337612.png';
  receita1 = 'FEIJOADA';
  receita2= "PERNIL PARA LANCHES";
  receita3 = 'QUIBE DE BANDEJA';
  receita4 = 'TORTA DE PALMITO';
  receita5= 'ESPAGUETE À CARBONARA';
  receita6 = 'STROGONOFF';
}
