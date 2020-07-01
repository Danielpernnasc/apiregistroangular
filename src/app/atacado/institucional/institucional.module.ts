import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitucionalComponent } from './institucional.component';
import { AngularSvgIconModule } from 'angular-svg-icon';



@NgModule({

  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
  declarations: [InstitucionalComponent]
})
export class InstitucionalModule { }
