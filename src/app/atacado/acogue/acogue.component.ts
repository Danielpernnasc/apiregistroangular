import { Component, OnInit } from '@angular/core';

import {  ModalCarneService } from './modal-carne';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acogue',
  templateUrl: './acogue.component.html',
  styleUrls: ['./acogue.component.scss']
})
export class AcogueComponent implements OnInit {
  bodyText: string;

  constructor(private modalService: ModalCarneService, private router: Router) { }

  ngOnInit() {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
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
  pesquisar:any ="assets/icones_svg/lupa.svg";
  carne_1: any ='assets/img/atacado/acogue/ID1_n@2x.png';
  carne_2: any ='assets/img/atacado/acogue/ID2@2x.png';
  carne_3: any ='assets/img/atacado/acogue/ID3@2x.png';
  carne_4: any ='assets/img/atacado/acogue/ID4@2x.png';
  carne_5: any ='assets/img/atacado/acogue/ID5@2x.png';
  carne_6: any ='assets/img/atacado/acogue/ID6@2x.png';
  carne_7: any ='assets/img/atacado/acogue/ID7@2x.png';
  carne_8: any ='assets/img/atacado/acogue/ID8_of@2x.png';
  carne_9: any ='assets/img/atacado/acogue/ID9@2x.png';
  carne_10: any ='assets/img/atacado/acogue/ID10@2x.png';
  carne_11: any ='assets/img/atacado/acogue/ID11_oi@2x.png';
  carne_12: any ='assets/img/atacado/acogue/ID12_oj@2x.png';
  carne_13: any ='assets/img/atacado/acogue/ID13@2x.png';
  carne_14: any ='assets/img/atacado/acogue/ID14@2x.png';
  orcamento: any = 'assets/icones_svg/icone_comprar.svg';

  k = 'Kg';
  peca = 'Peça'
  pecak = 'Peça Kg'
  pacote = '1 Kg';
  grama = '500 g'
}
