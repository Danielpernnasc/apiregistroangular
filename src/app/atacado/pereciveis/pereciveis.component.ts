import { Component, OnInit } from '@angular/core';
import { ModalFriosService } from './modal-frios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pereciveis',
  templateUrl: './pereciveis.component.html',
  styleUrls: ['./pereciveis.component.scss']
})
export class PereciveisComponent implements OnInit {

  constructor(private modalService: ModalFriosService, private router: Router) { }

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
    orcamento: any = 'assets/icones_svg/icone_comprar.svg';
    pesquisar:any ="assets/icones_svg/lupa.svg";
    frio_1: any ='assets/img/atacado/pereciveis/ID1_ox@2x.png';
    frio_2: any ='assets/img/atacado/pereciveis/ID2_oy@2x.png';
    frio_3: any ='assets/img/atacado/pereciveis/ID3@2x.png';
    frio_4: any ='assets/img/atacado/pereciveis/ID4@2x.png';
    frio_5: any ='assets/img/atacado/pereciveis/ID5@2x.png';
    frio_6: any ='assets/img/atacado/pereciveis/ID6@2x.png';
    frio_7: any ='assets/img/atacado/pereciveis/ID7@2x.png';
    frio_8: any ='assets/img/atacado/pereciveis/ID8_o@2x.png';
    frio_9: any ='assets/img/atacado/pereciveis/ID9@2x.png';
    frio_10: any ='assets/img/atacado/pereciveis/ID10@2x.png';
    frio_11: any ='assets/img/atacado/pereciveis/ID11_o@2x.png';
    frio_12: any ='assets/img/atacado/pereciveis/ID12_o@2x.png';
    frio_13: any ='assets/img/atacado/pereciveis/ID13@2x.png';
    frio_14: any ='assets/img/atacado/pereciveis/ID14@2x.png';
    frio_15: any ='assets/img/atacado/pereciveis/ID15@2x.png';
    frio_16: any ='assets/img/atacado/pereciveis/ID16@2x.png';


    p = "Peça";
    kg_2 = '2 Kg';
    gr_600 = '600 g';
    gr_720 = '720 g';
    pct = 'Pacote';
    kg_1 = '1 Kg'
    gr_400 = '400 g';

}
