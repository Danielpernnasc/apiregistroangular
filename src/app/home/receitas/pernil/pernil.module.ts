import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PernilComponent } from './pernil.component';
import { AngularSvgIconModule } from 'angular-svg-icon';





@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
  
  ],
  declarations: [PernilComponent],
  exports: [PernilComponent]
})
export class PernilModule { }
