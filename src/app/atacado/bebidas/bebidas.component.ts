import { Component, OnInit } from '@angular/core';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalService } from './modal'
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss']
})
export class BebidasComponent implements OnInit {
  constructor(private modalService: ModalService, private router: Router) { }
  // modalRef: BsModalRef;

  // constructor(private modalService: BsModalService) {}


  ngOnInit() {

  }

  openModal_bebida(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id)
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
  voltar() {
    window.location.href='#backhere'
  }
  // openModal_bebida_1() {
  //   this.modalRef = this.modalService.show(ModalComponent);
  //  }


 
  pesquisar:any ="assets/icones_svg/lupa.svg";
  bebida_um: any ="assets/img/atacado/bebida/ID1_ii@2x.png";
  bebida_dois: any ="assets/img/atacado/bebida/ID2_ij@2x.png";
  bebida_tres: any ='assets/img/atacado/bebida/ID3@2x.png';
  bebida_quatro: any = 'assets/img/atacado/bebida/ID4@2x.png';
  bebida_cinco: any ='assets/img/atacado/bebida/ID5@2x.png';
  bebida_seis: any = 'assets/img/atacado/bebida/ID6@2x.png';
  bebida_sete: any = 'assets/img/atacado/bebida/ID7@2x.png';
  bebida_oito: any = 'assets/img/atacado/bebida/ID8@2x.png';
  bebida_nove: any ='assets/img/atacado/bebida/ID9@2x.png';
  bebida_dez: any = 'assets/img/atacado/bebida/ID10@2x.png';
  bebida_onze: any = 'assets/img/atacado/bebida/ID11_is@2x.png';
  bebida_doze: any = 'assets/img/atacado/bebida/ID12_it@2x.png';
  bebida_treze: any = 'assets/img/atacado/bebida/ID13@2x.png';
  bebida_quatorze: any = 'assets/img/atacado/bebida/ID14@2x.png';
  bebida_quinze: any = 'assets/img/atacado/bebida/ID15@2x.png';
  bebida_dezesseis: any ='assets/img/atacado/bebida/ID16@2x.png';
  orcamento: any = 'assets/icones_svg/icone_comprar.svg';

  litro_5 = '1,5 litros';
  ml_500 = '500 ml';    
  ml_965 = '965 ml';
  caixa = 'Caixa';
  ml_960 = '960 ml';
  ml_810 = '810 ml';
  ml_250 = '250 ml';
  ml_970 = '970 ml';
  litro_1 = '1 litro';
  ml_350 = '350 ml';
  ml_600 ='600 ml';




}
