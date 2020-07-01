import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramaComponent } from './programa.component';
import { AngularSvgIconModule } from 'angular-svg-icon';




@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
  declarations: [ProgramaComponent],
  exports: [ProgramaComponent]


})
export class ProgramaModule { }
