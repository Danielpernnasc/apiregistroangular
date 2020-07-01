import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutrosComponent } from './outros.component';
import { AngularSvgIconModule } from 'angular-svg-icon';



@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
  declarations: [OutrosComponent]
})
export class OutrosModule { }
