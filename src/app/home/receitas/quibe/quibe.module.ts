import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuibeComponent } from './quibe.component';
import { AngularSvgIconModule } from 'angular-svg-icon';



@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
  declarations: [QuibeComponent],
})
export class QuibeModule { }
