import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-papelaria',
  templateUrl: './papelaria.component.html',
  styleUrls: ['./papelaria.component.scss']
})
export class PapelariaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pesquisar:any ="assets/icones_svg/lupa.svg";
}
