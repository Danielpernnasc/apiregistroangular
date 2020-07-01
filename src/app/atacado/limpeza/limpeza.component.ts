import { Component, OnInit } from '@angular/core';
import { ModalLimpezaService } from './modal-limpeza';
import { Router } from '@angular/router';

@Component({
  selector: 'app-limpeza',
  templateUrl: './limpeza.component.html',
  styleUrls: ['./limpeza.component.scss']
})
export class LimpezaComponent implements OnInit {

  constructor(private modalService: ModalLimpezaService, private router: Router) { }

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
  limp_1 = 'assets/img/atacado/limpeza/ID1_ow@2x.png';
  limp_2 = 'assets/img/atacado/limpeza/ID2_ox@2x.png';
  limp_3 = 'assets/img/atacado/limpeza/ID3@2x.png';
  limp_4 = 'assets/img/atacado/limpeza/ID4@2x.png';
  limp_5 = 'assets/img/atacado/limpeza/ID5@2x.png';
  limp_6 = 'assets/img/atacado/limpeza/ID6@2x.png';
  limp_7 = 'assets/img/atacado/limpeza/ID7@2x.png';
  limp_8 = 'assets/img/atacado/limpeza/ID8_o@2x.png';
  limp_9 = 'assets/img/atacado/limpeza/ID9@2x.png';
  limp_10 = 'assets/img/atacado/limpeza/ID10@2x.png';
  limp_11 = 'assets/img/atacado/limpeza/ID11_o@2x.png';
  limp_12 = 'assets/img/atacado/limpeza/ID12_o@2x.png';
  limp_13 = 'assets/img/atacado/limpeza/ID13@2x.png';
  limp_14 = 'assets/img/atacado/limpeza/ID14@2x.png';
  limp_15 = 'assets/img/atacado/limpeza/ID15@2x.png';
  limp_16 = 'assets/img/atacado/limpeza/ID16@2x.png';

  lt_2 = '2 litros';
  ml_5 = '500 ml';
  lt_1 = '1 litro';
  ml_7_5 = '750 ml';
  uni_8 = '8 un';
  g_60 = '60 g'

}
