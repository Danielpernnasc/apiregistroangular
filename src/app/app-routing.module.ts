import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions} from '@angular/router';
import { HomeComponent } from './home';
import { EmpresaComponent } from './empresa';
import { AtacadoComponent } from './atacado';
import { JornalComponent } from './jornal';
import { ContatoComponent } from './contato';
import { ParceirosComponent } from './parceiros';
import { NewsletterComponent } from './newsletter';
import { OrcamentoComponent } from './orcamento';
import { FaleComponent } from './contato/fale';
import { TelevendasComponent } from './contato/televendas';
import { TrabalheComponent } from './contato/trabalhe';
import { ClienteComponent } from './cliente';
import { CadastroComponent } from './cadastro';
import { AtualizarComponent } from './atualizar';
import { LeituraComponent } from './leitura';
import { DashboardComponent } from './dashboard';
import { AuthguardGuard } from './authguard.guard';



const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent },
  {path: 'empresa', component: EmpresaComponent },
  {path: 'atacado', component: AtacadoComponent },
  {path: 'jornal', component: JornalComponent },
  {path: 'contato', component: ContatoComponent },
  {path: 'contato/fale-conosco', component: FaleComponent},
  {path: 'contato/televendas', component: TelevendasComponent},
  {path: 'contato/trabalhe-conosco', component: TrabalheComponent},
  {path: 'parceiros', component: ParceirosComponent},
  {path: 'newsletter', component: NewsletterComponent}, 
  {path: 'orcamento', component: OrcamentoComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardGuard]},
  //teste
  {path: 'cliente', component: ClienteComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'editar/:id', component: AtualizarComponent},
  {path: 'cliente/:id', component: LeituraComponent}

];

@NgModule({

  imports: [
    RouterModule.forRoot(routes, routerOptions),
    // RouterModule.forRoot(routes,{ enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { Routes, RouterModule, ExtraOptions} from '@angular/router';
// import { HomeComponent } from './home';
// import { EmpresaComponent } from './empresa';
// import { AtacadoComponent } from './atacado';
// import { JornalComponent } from './jornal';
// import { ContatoComponent } from './contato';
// import { ParceirosComponent } from './parceiros';
// import { NewsletterComponent } from './newsletter';
// import { OrcamentoComponent } from './orcamento';
// import { BebidasComponent } from './atacado/bebidas';
// import { AcogueComponent } from './atacado/acogue';
// import { PereciveisComponent } from './atacado/pereciveis';
// import { HigieneComponent } from './atacado/higiene';
// import { LimpezaComponent } from './atacado/limpeza';
// import { MerceariaComponent } from './atacado/mercearia';
// import { InstitucionalComponent } from './atacado/institucional';
// import { PetComponent } from './atacado/pet';
// import { PapelariaComponent } from './atacado/papelaria';
// import { OutrosComponent } from './atacado/outros';
// import { ListaComponent } from './atacado/lista';
// import { FaleComponent } from './contato/fale';
// import { TelevendasComponent } from './contato/televendas';
// import { TrabalheComponent } from './contato/trabalhe';




// const routerOptions: ExtraOptions = {
//   scrollPositionRestoration: 'enabled',
//   anchorScrolling: 'enabled',
//   scrollOffset: [0, 64],
// };

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full'
//   },
//   {path: 'home', component: HomeComponent },
//   // {path: 'programa', component: ProgramaComponent},
//   {path: 'empresa', component: EmpresaComponent },
//   {path: 'atacado', component: AtacadoComponent },
//   {path: 'atacado/bebidas', component: BebidasComponent},
//   {path: 'atacado/carnes', component: AcogueComponent},
//   {path: 'atacado/pereciveis', component: PereciveisComponent},
//   {path: 'atacado/higiene', component: HigieneComponent},
//   {path: 'atacado/limpeza', component: LimpezaComponent},
//   {path: 'atacado/mercearia', component: MerceariaComponent},
//   // {path: 'atacado/hortifruti', component: HortifrutiComponent},
//   {path: 'atacado/hortifruti',loadChildren: () => import(`./atacado/hortifruti`).then(m => m.HortifrutiModule)},
//   {path: 'atacado/institucional', component: InstitucionalComponent},
//   {path: 'atacado/pet', component: PetComponent},
//   {path: 'atacado/papelaria', component: PapelariaComponent},
//   {path: 'atacado/outros', component: OutrosComponent},
//   {path: 'atacado/lista', component: ListaComponent},
//   {path: 'jornal', component: JornalComponent },
//   {path: 'contato', component: ContatoComponent },
//   {path: 'contato/fale-conosco', component: FaleComponent},
//   {path: 'contato/televendas', component: TelevendasComponent},
//   {path: 'contato/trabalhe-conosoco', component: TrabalheComponent},
//   {path: 'parceiros', component: ParceirosComponent},
//   {path: 'newsletter', component: NewsletterComponent}, 
//   {path: 'orcamento', component: OrcamentoComponent},
// ];

// @NgModule({

//   imports: [
//     RouterModule.forRoot(routes,{ enableTracing: false }),
//     RouterModule.forRoot(routes, routerOptions)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

