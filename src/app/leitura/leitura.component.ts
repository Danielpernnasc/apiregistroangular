import { Component, OnInit } from '@angular/core';
import { BancoService } from '../api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leitura',
  templateUrl: './leitura.component.html',
  styleUrls: ['./leitura.component.scss']
})
export class LeituraComponent implements OnInit {
  clienteID: any;
  clienteData: any;
  constructor(
    private bancoService: BancoService,
    private router: Router,
    private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.clienteID = this.actRoute.snapshot.params['id'];
    this.loadClientDetails(this.clienteID);
  }
  loadClientDetails(clienteID) {
    this.bancoService.getClienteDetails(clienteID).subscribe(client =>{
      this.clienteData = client;
    });
  }
  navigation(link){
    this.router.navigate([link]);
  }

}
