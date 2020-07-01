import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.scss']
})
export class ProgramaComponent implements OnInit {

  constructor() { }
  slidexIndex = true;
  ngOnInit(): void {
  }

  clickdots(n) {
    var slideIndex 
    slideIndex = 1;
    showDivs(slideIndex = n);
    function showDivs(n) {
      
    }
  }
  prog= 'Programa';
  fid= 'de Fidelidade';
  down= "Baixe nosso aplicativo";
  disp= "DOWNLOAD DISPONÍVEL PARA IOS E ANDROID";
  apple: any = 'assets/img/programa/ID1@2x.png';
  android: any = 'assets/img/programa/ID2@2x.png';
  desconto: any = 'assets/icones_svg/programa/desconto.svg';
  ofertas: any = 'assets/icones_svg/programa/ofertas.svg';
  tabloide: any = 'assets/icones_svg/programa/tabloide.svg';
  noticias: any = 'assets/icones_svg/programa/notificacao.svg';
  promocao: any = 'assets/icones_svg/programa/promocao.svg';
  mapa: any = 'assets/icones_svg/programa/mapa.svg';
  banner_mob: any = 'assets/img/programa/newbannerfidel.png';
  bgimageprog: any="assets/img/programa/newbannerfidel.png";

}
