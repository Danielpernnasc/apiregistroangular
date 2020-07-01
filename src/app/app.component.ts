import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { MustMatch } from './validacao/validacao_cadatro';
import { BancocalvoService } from './api';
import { first, windowWhen } from 'rxjs/operators';


declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent implements OnInit {
  // public maskfone = ['(',/[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/];
  // public maskcep = [/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/];
  registerForm: FormGroup;
  registroFormu: FormGroup;
  registerFormLogin: FormGroup;
  submitted = false;
  submittednews = false;
  loginbtn: boolean;
  logoutbtn: boolean;
  // submittedlogin = false;

  // UF: any = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

  constructor(private modalService: ModalService, private router: Router, private fbnew: FormBuilder, private fbregister: FormBuilder, private fblogin: FormBuilder, private bancoservicecalvo: BancocalvoService) {
    bancoservicecalvo.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.bancoservicecalvo.isLoggedIn())
    {
    console.log("loggedin");
    this.loginbtn=false;
    this.logoutbtn=true
    }
    else{
    this.loginbtn=true;
    this.logoutbtn=false
  
  }

  }
Footer = true;

private changeName(name: boolean): void {
  this.logoutbtn = name;
  this.loginbtn = !name;
}

logout()
{
  this.bancoservicecalvo.deleteToken();
  window.location.href = window.location.href;
}


ngOnInit(){
  var dropdown = document.getElementsByClassName("link_mob_btn");
  var i;
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function() {
    this.classList.toggle("active_mob");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
    })
  }
  this.router.events
  .subscribe((event) => {
    if(event instanceof NavigationEnd) {
      this.Footer = (event.url !== '/newsletter')
    }
  });
  $(".close-nav").click(function(){
    // console.log('Click')
    if($(".dropdown-content").hasClass("show")){
        $(".dropdown-content").removeClass("show");
    }
  });

  // $('.color_link').click(function(){
  // $('.color_link').removeClass('fixed_color');
  // $(this).addClass('fixed_color');
  // $('.color_link').val($(this)[0].innerText);
  // });

  this.registerForm = this.fbnew.group({
    email: ['', [Validators.required, Validators.email]],
  }, {
    validators: MustMatch
  });

  
  this.registroFormu = this.fbregister.group({
    name: ['', Validators.required],
    rua: ['', Validators.required],
    numero: ['', Validators.required],
    bairro: ['', Validators.required],
    cidade: ['', Validators.required],
    estado: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', Validators.required],
    cep: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  },{
     validators: MustMatch('password', 'confirmPassword')
  });

  this.registerFormLogin = this.fblogin.group({
    login: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required]
  });
}

// changeState(e) {
//   console.log(e.value)
//   this.estado.setValue(e.target.value), {
//     onlySelf: true
//   }
// }
get f() { return this.registerForm.controls; }
get g() { return this.registroFormu.controls; }
// get estado() { return this.registroFormu.get('estado'); }
// get h() { return this.registerFormLogin.controls; }



onSubmit_newsletter() {
  this. submittednews = true;
  if (this.registerForm.invalid) {
    return;
  }
  document.getElementById('sucesso').classList.toggle("show_ok");
  document.getElementById('esconder_form').classList.toggle("form_esconder");
}

onSubmit(registroFormu1) {
  console.log('ir para localstorage')
  this.bancoservicecalvo.userregistration(registroFormu1.value.nome, registroFormu1.value.rua, registroFormu1.value.numero, registroFormu1.value.complemento,
    registroFormu1.value.bairro, registroFormu1.value.cep, registroFormu1.value.cidade, registroFormu1.value.uf, registroFormu1.value.email, registroFormu1.value.telefone,
    registroFormu1.value.senha, registroFormu1.value.confirma)
    .pipe(first())
    .subscribe(
    data => {
      this.router.navigate(['login']);
    },
    error => {
    });
    
  //     this.submitted = true;
  //     if (this.registroFormu.invalid) {
  //       return;
  //     } 

}
get nome() { return this.registroFormu.get('nome'); }
get rua() { return this.registroFormu.get('rua'); }
get numero() { return this.registroFormu.get('numero'); }
get complemento() { return this.registroFormu.get('complemento'); }
get cep() { return this.registroFormu.get('cep'); }
get bairro() { return this.registroFormu.get('bairro'); }
get cidade() { return this.registroFormu.get('cidade'); }
get estado() { return this.registroFormu.get('estado'); }
get email() { return this.registroFormu.get('email'); }
get telefone() { return this.registroFormu.get('telefone'); }
get password() { return this.registroFormu.get('password'); }
get confirmPassword() { return this.registroFormu.get('confirmPassword');}

onSubmitLogin(registerFormLogin1) {
  this.bancoservicecalvo.userlogin(registerFormLogin1.value.login,registerFormLogin1.value.password)
    .pipe(first())
    .subscribe(
    data => {
      const redirect = this.bancoservicecalvo.redirectUrl? this.bancoservicecalvo.redirectUrl : '/dashboard';
      this.router.navigate([redirect]);
    },
    error => {
      alert("Usuario ou senha está incorreto")
    });
  // this.submittedlogin = true;
  // if (this.registerFormLogin.invalid) {
  //   return;
  // }
}
get login() { return this.registerFormLogin.get('login'); } 
get senha() { return this.registerFormLogin.get ('senha'); }

openModal(id: string) {
  this.modalService.open(id);
}

closeModal (id: string) {
  this.modalService.close(id);
}

onClick_atacado(){
  document.getElementById("myDropdown_atacado").classList.toggle("show");
};

onClick_contato(){
  document.getElementById("myDropdown_contato").classList.toggle("show");
};

orcamento_produtos() {
this.router.navigateByUrl('orcamento');
}

whatsapp_btn() {
  window.open('https://web.whatsapp.com/send?phone=5511985960096&text=')
}

openNav() {
document.getElementById("mySidenav").style.width = "200px";
}

closeNav() {
document.getElementById("mySidenav").style.width = "0";
}

facebooksocial() {
  window.open('https://www.facebook.com/calvoatac')
}

instagramsocial() {
  window.open('https://www.instagram.com/calvoatacadista/')
}
  cartoes:any ="assets/img/ID11.png";
  logo:any ="assets/img/logo.png";
  lupa:any ="assets/icones_svg/lupa.svg";
  apple:any ="assets/icones_svg/apple.svg";
  android:any ="assets/icones_svg/android.svg";
  orcamento:any ="assets/icones_svg/icone_comprar.svg";
  setadow:any ="assets/icones_svg/seta_expandir.svg";
  instagram:any ="assets/icones_svg/instagram.svg";
  facebook:any ="assets/icones_svg/facebook.svg";
  whatsapp:any ="assets/icones_svg/whatsapp.svg";
  degrade_fidel: any ="assets/icones_svg/degrade_fidel.svg";
  ok:any = 'assets/icones_svg/check_icon.svg';
  seta_baixo:any = 'assets/icones_svg/seta-para-baixo.svg';
  icone_orca:any = "assets/icones_svg/orcamento_list.svg";

  new ="Novo Usuário?";
  conta="Criar Conta";
  user ="Já é Usuário?";
  l = 'Login';
  s = 'Senha';
  rs = 'Repita Senha';
  cr = 'CRIE sua conta ou REGISTRE-SE';
  CN = 'Cadastre-se em nossa Newsletter';
  need = "Digite seu e-mail";
  error = "e-mail inválido";
  sucess ="E-mail cadastrado com sucesso.";
  address_calvo = "Av. Rio das Pedras, 2118 - Jd. Aricanduva - PABX 2723-6000"
  n ="Nome";
  dn = "Digite seu Nome!";
  end = "Endereço";
  drua = "Digite a rua!";
  em = "E-mail";
  dem = "Digite seu e-mail!"
  dvalem = "O precisa ser um e-mail válido como: 'email@email.com.br'";
  tel = "Telefone";
  dtel = "Digite seu Telefone de 9 dígitios";
  ds = "Digite uma senha de 6 a 10 digítos";
  dsseis = "A senha precisa ter no mínimo 6 caracteres";
  cs = "Digite a senha novamente!";
  spiden = "A senha precisa ser identica."
  

}

