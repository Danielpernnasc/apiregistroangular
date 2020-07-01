import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TortapalmComponent } from './tortapalm.component';
import { AngularSvgIconModule } from 'angular-svg-icon';



@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
  declarations: [TortapalmComponent]
})
export class TortapalmModule { }
