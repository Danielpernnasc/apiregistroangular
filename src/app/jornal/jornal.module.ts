import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JornalComponent } from './jornal.component';

import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({

  declarations: [JornalComponent],
  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
})
export class JornalModule { }
