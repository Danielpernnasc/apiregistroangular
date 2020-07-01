import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from './validacao/validacao_news';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
      }, {
          validator: MustMatch
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit_newsletter() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      document.getElementById("sucesso").classList.toggle("show_ok");
      document.getElementById("esconder_form").classList.toggle("form_esconder");
    }
  // onShow_ok() {
  //   document.getElementById("sucesso").classList.toggle("show_ok");
  // }

  ok:any = 'assets/icones_svg/newsletter/ok.svg';
  nl = 'Newsletter';
  rinf = 'Receba Informações da Calvo';
  CNE = 'Cadastre-se em nossa Newsletter e receba ofertas por e-mail.';
  sucess = 'E-mail cadastrado com sucesso.';
  need = "O e-mail é preciso!"
  error = "e-mail inválido!"
}
