import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-televendas',
  templateUrl: './televendas.component.html',
  styleUrls: ['./televendas.component.scss']
})
export class TelevendasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  atend_inter: any = 'assets/img/contato/televendas/img_interna_televendas@2x.png';
  spcapital: any = 'assets/img/contato/televendas/img_televendas@2x.png';
  atendente: any = 'assets/img/contato/televendas/shutterstock_242105311@2x.png';

}
