import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrogonoffComponent } from './strogonoff.component';
import { AngularSvgIconModule } from 'angular-svg-icon';


@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
  declarations: [StrogonoffComponent]
})
export class StrogonoffModule { }
