import { Component, OnInit } from '@angular/core';
import { ModalHortifrutiService } from './modal-hortifruti/modal-hortifruti.service';



@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.scss']
})
export class PagetwoComponent implements OnInit {

  constructor(private ModalService: ModalHortifrutiService) { }

  ngOnInit(): void {
  }
  openModal (id: string) {
    this.ModalService.open(id);
  }
  closeModal (id: string) {
    this.ModalService.close(id);
  }
  pesquisar:any ="assets/icones_svg/lupa.svg";
  orcamento: any = 'assets/icones_svg/icone_comprar.svg';
  maracuja: any = 'assets/img/atacado/hortifruti/maracuja.png';
  manga: any = 'assets/img/atacado/hortifruti/manga.png';
  coco: any ='assets/img/atacado/hortifruti/coco.png';
  tomate:any ="assets/img/atacado/hortifruti/tomate.png";
  k = "Kg";
  m = "pacote";
}
