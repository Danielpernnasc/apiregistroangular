import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  public url = 'http://localhost/novoapicalvo/'
  constructor(private http: HttpClient) { }
  getCliente(){
    return this.http.get(this.url + 'clientes.php');
  }
  getClienteDetails(id){
    return this.http.get(this.url + 'dados.php?id=' + id);
  }
  createClient(data){
    return this.http.post(this.url + 'cadastro.php', data);
  }
  updateCliente(data){
    return this.http.post(this.url + 'editar.php', data)
  }
  deleteCliente(id){
    return this.http.get(this.url + 'delete.php?id=' + id)
  }
}
