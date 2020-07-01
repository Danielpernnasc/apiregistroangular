import { Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-trabalhe',
  templateUrl: './trabalhe.component.html',
  styleUrls: ['./trabalhe.component.scss']
})
export class TrabalheComponent implements OnInit {

  public mask = ['(',/[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/]
  constructor() { }

  ngOnInit() {
      $('.btn-anexar').on('click', function() {
        $('.anexar_curriculum').trigger('click');
      });
      $('.anexar_curriculum').on('change', function(){
        var fileName = $(this)[0].files[0].name;
      $('#file').val(fileName);
      });
  }
  work: any = 'assets/img/contato/trabalhe/img_trabalhe_conosco@2x.png'
  
}
