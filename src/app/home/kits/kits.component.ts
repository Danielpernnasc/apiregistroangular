import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal';

@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.scss']
})
export class KitsComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }
  openModal (id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }
  cafe: any = 'assets/img/kits/kit_cafe.png';
  higiene: any = 'assets/img/kits/kit_higiene.png'
  ifood: any =  'assets/icones_svg/home/ifood.svg';

}
