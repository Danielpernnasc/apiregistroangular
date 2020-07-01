import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaleComponent } from './fale.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    TextMaskModule
  ],
  declarations: [
    FaleComponent
  ]
})
export class FaleModule { }
