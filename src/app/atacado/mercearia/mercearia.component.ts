import { Component, OnInit } from '@angular/core';
import { ModalMercService } from './modal-merc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mercearia',
  templateUrl: './mercearia.component.html',
  styleUrls: ['./mercearia.component.scss']
})
export class MerceariaComponent implements OnInit {

  constructor(private modalService: ModalMercService, private router: Router) { }

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
  merc_1: any = 'assets/img/atacado/mercearia/ID1_ow@2x.png';
  merc_2: any = 'assets/img/atacado/mercearia/ID2_ox@2x.png';
  merc_3: any = 'assets/img/atacado/mercearia/ID3@2x.png';
  merc_4: any = 'assets/img/atacado/mercearia/ID4@2x.png';
  merc_5: any = 'assets/img/atacado/mercearia/ID5@2x.png';
  merc_6: any = 'assets/img/atacado/mercearia/ID6@2x.png';
  merc_7: any = 'assets/img/atacado/mercearia/ID7@2x.png';
  merc_8: any = 'assets/img/atacado/mercearia/ID8_o@2x.png';
  merc_9: any = 'assets/img/atacado/mercearia/ID9@2x.png';
  merc_10: any = 'assets/img/atacado/mercearia/ID10@2x.png';
  merc_11: any = 'assets/img/atacado/mercearia/ID11_o@2x.png';
  merc_12: any = 'assets/img/atacado/mercearia/ID12_o@2x.png';
  merc_13: any = 'assets/img/atacado/mercearia/ID13@2x.png';
  merc_14: any = 'assets/img/atacado/mercearia/ID14@2x.png';
  merc_15: any = 'assets/img/atacado/mercearia/ID15@2x.png';
  merc_16: any = 'assets/img/atacado/mercearia/ID16@2x.png';

  g_12= '120 g';
  g_14= '140 g';
  g_5 = '500 g';
  g_143 ='143 g';
  g_410 = '410 g';
  kg_1 = '1 Kg';
  g_2 = '200 g';
  g_3 = '300 g';
  kg_1020g= '1,020 g';
  g_395 = '395 g';

}
