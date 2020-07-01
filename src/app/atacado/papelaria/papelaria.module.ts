import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PapelariaComponent } from './papelaria.component';
import { AngularSvgIconModule } from 'angular-svg-icon';



@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
  declarations: [PapelariaComponent]
})
export class PapelariaModule { }
