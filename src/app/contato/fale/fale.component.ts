import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fale',
  templateUrl: './fale.component.html',
  styleUrls: ['./fale.component.scss']
})
export class FaleComponent implements OnInit {
  public mask = ['(',/[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  trabalhe_conosco(){
    this.router.navigateByUrl('/contato/trabalhe-conosco');
  }
  televendas(){
    this.router.navigateByUrl('/contato/televendas');
  }
  tel_sale: any = 'assets/icones_svg/contato/telefone_vendas.svg';
  address_calvo = "Av. Rio das Pedras, 2118 - Jd. Aricanduva, São Paulo (SP)";
  telefone_calvo = "11 2723-6000";
  email_calvo = 'calvo@calvoatac.com.br';
}
