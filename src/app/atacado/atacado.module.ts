import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtacadoComponent } from './atacado.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HomeModule } from '../home';
import { AtacadoRoutingModule } from './atacado-routing.module';




@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    AtacadoRoutingModule,
    HomeModule
  ],
  declarations: [AtacadoComponent],
  exports: [AtacadoComponent]
})
export class AtacadoModule { }
