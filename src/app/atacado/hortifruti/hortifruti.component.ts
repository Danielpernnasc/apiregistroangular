import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hortifruti',
  templateUrl: './hortifruti.component.html',
  styleUrls: ['./hortifruti.component.scss']
})
export class HortifrutiComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
  }

  link_categorias_bebidas() {
    this.router.navigateByUrl('atacado/bebidas');
  }
  link_categorias_carnes() {
    this.router.navigateByUrl('atacado/carnes');
  }
  link_categorias_pereciveis() {
    this.router.navigateByUrl('atacado/pereciveis');
  }
  link_categorias_higiene() {
    this.router.navigateByUrl('atacado/higiene');
  }
  link_categorias_limpeza() {
    this.router.navigateByUrl('atacado/limpeza');
  }
  link_categorias_mercearia() {
    this.router.navigateByUrl('atacado/mercearia');
  }
  link_categorias_hortifruti() {
    this.router.navigateByUrl('atacado/hortifruti');
  }
  link_categorias_institucional() {
    this.router.navigateByUrl('atacado/institucional');
  }
  link_categorias_pet() {
    this.router.navigateByUrl('atacado/pet');
  }
  link_categorias_papelaria() {
    this.router.navigateByUrl('atacado/papelaria');
  }
  link_categorias_outros() {
    this.router.navigateByUrl('atacado/outros');
  }
  // @NgModule({

  //   imports: [RouterModule.forRoot(routes, routerOptions)],
  
  // })
  pesquisar:any ="assets/icones_svg/lupa.svg";
  tomate:any ="assets/img/atacado/hortifruti/tomate.png";
  batata:any ="assets/img/atacado/hortifruti/batata.png";
  abobrinha:any ='assets/img/atacado/hortifruti/abobrinha.png';
  cenoura:any ='assets/img/atacado/hortifruti/cenoura.png';
  beterraba: any ='assets/img/atacado/hortifruti/beterraba.png';
  agriao: any = 'assets/img/atacado/hortifruti/agriao.png';
  salsa_cebolinha: any ='assets/img/atacado/hortifruti/salsa_cebolinha.png';
  couve: any ='assets/img/atacado/hortifruti/couve.png';
  alface: any ='assets/img/atacado/hortifruti/alface_crespa.png';
  alface_americana: any ='assets/img/atacado/hortifruti/alface_americana.png';
  acelga: any = 'assets/img/atacado/hortifruti/acelga.png';
  ovo: any = 'assets/img/atacado/hortifruti/ovo.png';
  laranja: any = 'assets/img/atacado/hortifruti/laranja.png';
  limao: any = 'assets/img/atacado/hortifruti/limao.png';
  maca: any = 'assets/img/atacado/hortifruti/maca.png';
  melancia: any = 'assets/img/atacado/hortifruti/melancia.png';
  maracuja: any = 'assets/img/atacado/hortifruti/maracuja.png';
  manga: any = 'assets/img/atacado/hortifruti/manga.png';
  coco: any ='assets/img/atacado/hortifruti/coco.png';
  cebola: any = 'assets/img/atacado/hortifruti/cebola.png';
  orcamento: any = 'assets/icones_svg/icone_comprar.svg';

  k = "Kg";
  m = "pacote";

}
