import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor() { }
  // slideIndex = true;
  ngOnInit() {
  }
  // selecionar_(n) {
  //   var slideIndex
  //   slideIndex = 1;
  //   ShowDivs(slideIndex = n);
  //   function ShowDivs(n) {
  //     var i;
  //     var x = document.getElementsByClassName('icone-lista');
  //     var dots = document.getElementsByClassName('adicionar');
  //     if (n > x.length) {slideIndex = 1}
  //     if(n < 1 ) {slideIndex = x.length}
  //     for (i = 0; i < x.length; i++) {
  //       x[i].classList.toggle("none");
  //     }
  //     for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(" campo_ativo_yellow", " ");
  //     }
  //     x[slideIndex-1].classList.toggle('block');
  //     dots[slideIndex-1].className += " campo_ativo_yellow";
  //   }
  // }
  selecionar(id) {
      document.getElementById(id).classList.toggle("campo_ativo_yellow");
      document.getElementById('adicionado'+id).classList.toggle('mostrar_orc');
      document.getElementById('adicionar'+id).classList.toggle('esconder_orc');
    }
  downlist: any = 'assets/icones_svg/atacado/arquivo_lista.svg';
  orcamento:any ="assets/icones_svg/atacado/orcamento_list.svg";
  pesquisar: any ='assets/icones_svg/lupa.svg';

}
