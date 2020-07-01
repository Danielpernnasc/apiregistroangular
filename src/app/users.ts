export class Users {
    public id: number;
    public nome: string;
    public rua: string;
    public numero: string;
    public complemento: string;
    public bairro: string;
    public cep: string
    public cidade: string;
    public uf: string;
    public email: string;
    public tel: string;
    public senha: string;
    public confirma: string;

    constructor(id:number, nome: string, rua: string, numero: string, complemento: string, bairro: string, cep: string, cidade: string, uf: string, email: string, 
                tel: string, senha: string, confirma: string ) {
                this.id = id;
                this.nome = nome;
                this.rua = rua;
                this.numero = numero;
                this.complemento = complemento;
                this.bairro = bairro;
                this.cep = cep;
                this.cidade = cidade;
                this.uf = uf;
                this.email = email;
                this.tel = tel,
                this.senha = senha,
                this.confirma = confirma;

    }
}