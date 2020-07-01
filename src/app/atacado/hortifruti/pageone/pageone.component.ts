import { Component, OnInit } from '@angular/core';
import { ModalHortifrutiService } from './modal-hortifruti/modal-hortifruti.service';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.scss']
})
export class PageoneComponent implements OnInit {

  constructor(private modalService: ModalHortifrutiService) { }

  ngOnInit(): void {
  }
  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id)
  }
  pesquisar:any ="assets/icones_svg/lupa.svg";
  batata:any ="assets/img/atacado/hortifruti/batata.png";
  abobrinha:any ='assets/img/atacado/hortifruti/abobrinha.png';
  cenoura:any ='assets/img/atacado/hortifruti/cenoura.png';
  beterraba: any ='assets/img/atacado/hortifruti/beterraba.png';
  agriao: any = 'assets/img/atacado/hortifruti/agriao.png';
  salsa_cebolinha: any ='assets/img/atacado/hortifruti/salsa_cebolinha.png';
  couve: any ='assets/img/atacado/hortifruti/couve.png';
  alface: any ='assets/img/atacado/hortifruti/alface_crespa.png';
  alface_americana: any ='assets/img/atacado/hortifruti/alface_americana.png';
  acelga: any = 'assets/img/atacado/hortifruti/acelga.png';
  ovo: any = 'assets/img/atacado/hortifruti/ovo.png';
  laranja: any = 'assets/img/atacado/hortifruti/laranja.png';
  limao: any = 'assets/img/atacado/hortifruti/limao.png';
  maca: any = 'assets/img/atacado/hortifruti/maca.png';
  melancia: any = 'assets/img/atacado/hortifruti/melancia.png';
  cebola: any = 'assets/img/atacado/hortifruti/cebola.png';
  orcamento: any = 'assets/icones_svg/icone_comprar.svg';
  k = "Kg";
  m = "pacote";


}
