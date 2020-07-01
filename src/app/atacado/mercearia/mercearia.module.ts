import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerceariaComponent } from './mercearia.component';
// import { MerceariaRoutingModule } from './mercearia-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ModalMercComponent } from './modal-merc';

@NgModule({
  imports: [
    CommonModule,
    // MerceariaRoutingModule,
    AngularSvgIconModule
  ],
  declarations: [
    MerceariaComponent,
    ModalMercComponent
  ]
})
export class MerceariaModule { }
