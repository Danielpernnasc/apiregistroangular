import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ClickOutsideModule } from 'ng-click-outside';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from './modal';
import { OrcamentoModule } from './orcamento';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AtacadoModule } from './atacado';
import { CadastroComponent } from './cadastro';
import { ClienteComponent } from './cliente';
import { LeituraComponent } from './leitura';
import { AtualizarComponent } from './atualizar';
import { TextMaskModule } from 'angular2-text-mask';
import { DashboardComponent } from './dashboard';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule,
    OrcamentoModule,
    ClickOutsideModule,
    ModalModule,
    ReactiveFormsModule,
    NgbModule,
    AtacadoModule,
    TextMaskModule
  ],
      declarations: [  
        AppComponent, 
        CadastroComponent, 
        ClienteComponent, 
        LeituraComponent, 
        AtualizarComponent, 
        DashboardComponent, 
      ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  exports: [AppComponent]
 
})
export class AppModule { }
