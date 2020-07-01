import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.component.html',
  styleUrls: ['./dicas.component.scss']
})
export class DicasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  d
  D = 'Dicas';
  busniess = 'para o seu negócio';
  mais_sucesso = 'A CALVO ATACADISTA PREPAROU UM CONTEÚDO EXCLUSIVO PARA AUXILIÁ-LO(A) A TER MAIS SUCESSO NO SEU NEGÓCIO.';
  dicas_select = 'São dicas selecionadas por experts sobre gestão administrativa e financeira, gerenciamento de estoque e reabastecimento, processo de compras, estudos de viabilidade econômica e muito mais.';
  ebook = 'Baixe, gratuitamente, nossos E-Books, melhore seus resultados e aumente seus lucros.';
  book_1: any = 'assets/img/dicas/L1@2x.png';
  book_2: any = 'assets/img/dicas/L2@2x.png';
  book_3: any = 'assets/img/dicas/L3@2x.png';
  book_4: any = 'assets/img/dicas/L4@2x.png';
  dicas: any = 'assets/img/dicas/new_banner_dica.png';
  bgimagedicas: any ='assets/img/dicas/new_banner_dica.png';
}
