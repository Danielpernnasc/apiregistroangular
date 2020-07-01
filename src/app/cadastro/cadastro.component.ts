import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BancoService } from '../api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  clienteForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private bancoService: BancoService,
    private router: Router) { 
    this.clienteForm = this.fb.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      senha: ['', Validators.required],
      confirma: ['', Validators.required]
    });
    }

  ngOnInit() {
  }
  saveClientes(values){
    const clienteData = new FormData();
    clienteData.append('nome', values.nome);
    clienteData.append('endereco', values.endereco);
    clienteData.append('email', values.email);
    clienteData.append('telefone', values.telefone);
    clienteData.append('senha', values.senha);
    clienteData.append('confirma', values.confirma);
    this.bancoService.createClient(clienteData).subscribe(result => 
    {
      this.router.navigate(['']);
    });
  }
}
