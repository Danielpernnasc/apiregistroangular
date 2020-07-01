import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista.component';
// import { ListaRoutingModule } from './lista-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  imports: [
    CommonModule,
    // ListaRoutingModule,
    AngularSvgIconModule
  ],
  declarations: [ListaComponent],
  bootstrap: [ListaComponent]
})
export class ListaModule { }
