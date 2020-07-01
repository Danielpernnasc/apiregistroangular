import { Component, OnInit } from '@angular/core';
import { ModalHigieneService } from './modal-higiene/modal-higiene.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-higiene',
  templateUrl: './higiene.component.html',
  styleUrls: ['./higiene.component.scss']
})
export class HigieneComponent implements OnInit {

  constructor(private modalService: ModalHigieneService, private router: Router) { }

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
  orcamento: any = 'assets/icones_svg/icone_comprar.svg';
  higi_1: any = 'assets/img/atacado/higiene/ID1_ow@2x.png';
  higi_2: any = 'assets/img/atacado/higiene/ID2_ox@2x.png';
  higi_3: any = 'assets/img/atacado/higiene/ID3@2x.png';
  higi_4: any = 'assets/img/atacado/higiene/ID4@2x.png';
  higi_5: any = 'assets/img/atacado/higiene/ID5@2x.png';
  higi_6: any = 'assets/img/atacado/higiene/ID6@2x.png';
  higi_7: any = 'assets/img/atacado/higiene/ID7@2x.png';
  higi_8: any = 'assets/img/atacado/higiene/ID8_o@2x.png';
  higi_9: any = 'assets/img/atacado/higiene/ID9@2x.png';
  higi_10: any = 'assets/img/atacado/higiene/ID10@2x.png';
  higi_11: any = 'assets/img/atacado/higiene/ID11_o@2x.png';
  higi_12: any = 'assets/img/atacado/higiene/ID12_o@2x.png';
  higi_13: any = 'assets/img/atacado/higiene/ID13@2x.png';
  higi_14: any = 'assets/img/atacado/higiene/ID14@2x.png';
  higi_15: any = 'assets/img/atacado/higiene/ID15@2x.png';
  higi_16: any = 'assets/img/atacado/higiene/ID16@2x.png';
  
  promocao = 'Leve 8 e Pague 7';
  ml_5 = '500 ml';
  ml_35 = '350 ml';
  g_230 = '230 g';
  ml_4 =  '400 ml';
  g_90 = '90 g';
  g_70 = '70 g';
  Aer = 'Aerosol';


}
