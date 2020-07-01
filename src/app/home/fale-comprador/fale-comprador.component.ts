import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-fale-comprador',
  templateUrl: './fale-comprador.component.html',
  styleUrls: ['./fale-comprador.component.scss']
})
export class FaleCompradorComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  public masktel = ['(',/[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public cnpj = [/[0-9]/,/\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'/',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/];
  public cep = [/[0-9]/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    $('.btn-anexar').on('click', function() {
      $('.anexar_catalogo').trigger('click');
    });
    $('.anexar_catalogo').on('change', function(){
      var fileName = $(this)[0].files[0].name;
    $('#file').val(fileName);
    });
    this.registerForm = this.formBuilder.group({
      Social: ['', Validators.required],
      Name: ['', Validators.required],
      number_cpnj: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fone: ['', Validators.required],
      address: ['', Validators.required],
      segmento: ['', Validators.required],
      number: ['', Validators.required],
      cep: ['', Validators.required],
      produto: ['', Validators.required],
      Mensagem: ['', [Validators.required, Validators.minLength(10)]],
      file: ['', Validators.required]
    });

  }
  get f() {return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if(this.registerForm.invalid) {
      return;
    }
  }

}
