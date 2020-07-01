import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  calvoex: any ="assets/img/empresa/ID1@2x.png";
  calvointbeb: any ="assets/img/empresa/ID2.png";
  calvointperi: any ='assets/img/empresa/ID3.png';
  calvointaper: any ='assets/img/empresa/ID4.png';
  calvointhort: any ='assets/img/empresa/ID5.png';
  calovintper: any ='assets/img/empresa/ID6.png';
  lupa: any='assets/icones_svg/empresa/ID1_fj.svg';
  sacola: any='assets/icones_svg/empresa/ID2_fk.svg'
  armazenamento: any="assets/icones_svg/empresa/ID3_fl.svg";
  abastecimento: any="assets/icones_svg/empresa/ID4_fm.svg";
  reabastecimento: any="assets/icones_svg/empresa/ID5_fn.svg";
  cliente: any="assets/icones_svg/empresa/ID6_fo.svg";
  banner_mob:any="assets/img/empresa/b1.png";
  banner_mob_baixo:any="assets/img/empresa/b2.png";
  banner_empresa: any = 'assets/img/empresa/banner_empresa.png';
  banner_desk_baixo: any="assets/img/empresa/b2.png";



  constructor() { }

  ngOnInit() {
  }

}
