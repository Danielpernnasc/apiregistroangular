import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  title = 'NgxCarouselLibrary'
  public innerWidth: any
  products: any
  options1: any
  constructor(private router: Router) {
 
  }

  ngOnInit() { 
  }

  fornecedor() {
    this.router.navigateByUrl('fornecedor');
  }
  uscompradores() {
    this.router.navigateByUrl('comprador');
  }
  kits_especiais() {
    this.router.navigateByUrl('kits_especiais');
  }
  baixartabloide() {
    window.open('https://dashboard-magictv.com.br/calvo/jornalcalvosemanal/JornalCalvoAtacadista961.pdf')
  }


  fidelidade: any ="assets/img/home/ID01.png";
  dicas: any ="assets/img/home/ID02.png";
  receitas: any ="assets/img/home/ID03.png";
  degrade_fidel: any ="assets/icones_svg/home/degrade_fidel.svg";
  headphone: any ="assets/icones_svg/home/headphone.svg";
  frios: any ="assets/img/home/ID04.png";
  mercearia: any ="assets/img/home/newmercearia.png";
  carnes: any ="assets/img/home/ID1.png"
  bebidas: any ="assets/img/home/ID07.png";
  newdrinks: any ="assets/img/home/newbebidas.png";
  limpeza: any ="assets/img/home/ID08.png";
  fundo_kit: any ="assets/img/home/banner2.png";
  kit_um: any ="assets/img/home/k1@2x.png";
  kit_dois: any ="assets/img/home/k2@2x.png";
  orcamento: any ="assets/icones_svg/home/orcamento.svg";
  oferta_a: any ="assets/img/home/a.png";
  oferta_b: any ="assets/img/home/b.png";
  oferta_c: any ="assets/img/home/c.png";
  oferta_d: any ="assets/img/home/d.png";
  oferta_e: any ="assets/img/home/e.png";
  oferta_f: any ="assets/img/home/f.png";
  oferta_g: any ="assets/img/home/g.png";
  oferta_h: any ="assets/img/home/h.png";
  comprador: any ="assets/img/home/ID09@2x.png";
  fornecedores: any ="assets/img/home/ID10.png";
  img_fundo: any = 'assets/img/home/banner2.png';
  hortifruti: any = 'assets/img/home/hortifruti.png';
  higiene: any = 'assets/img/home/newhigienepessoal.png';
  cestas: any = 'assets/img/home/cesta_basicas.png';
  institucional: any = 'assets/img/home/institucional.png';
  pet: any = 'assets/img/home/pet.png';
  papelaria: any = 'assets/img/home/papelaria.png';
  descartaveis: any = 'assets/img/home/descartaveis.png';
  banner_mob: any = 'assets/img/home/banner1.png';
  newbanner_mob: any = 'assets/img/home/newbanner1.png';
  newbanner_desk: any = 'assets/img/home/newbanner1.png';
  maesday:any ="assets/img/home/campanha_dia_maes.png";
  program_fidel: any = 'assets/img/home/new_banner_fidel_to_home.png';
  program_fidel_mob: any = 'assets/img/home/prog_fidel_mob_to_home.png';
  apple_desktop: any = 'assets/icones_svg/apple_desktop.svg';
  android_desktop: any = 'assets/icones_svg/android_desktop.svg';
  apple_mobile: any = 'assets/icones_svg/apple_mobile.svg';
  android_mobile: any = 'assets/icones_svg/android_mobile.svg';
  banner_empresa: any = 'assets/img/home/banner_empresa.png';
  bannerdicas: any ='assets/img/dicas/new_banner_dica.png';
  kit_especial_mob: any ='assets/img/home/kit_especial_mob.png';
  bg_kit: any ='assets/img/home/banner2.png';
  D = 'Dicas';
  busniess = 'para o seu negócio';
  prog= 'Programa';
  fid= 'de Fidelidade';
  down= "Baixe nosso aplicativo";

  

}
