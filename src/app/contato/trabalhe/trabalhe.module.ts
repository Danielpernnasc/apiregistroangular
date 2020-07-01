import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrabalheComponent } from './trabalhe.component';

import { TextMaskModule } from 'angular2-text-mask';



@NgModule({
  imports: [
    CommonModule,
    TextMaskModule

  ],
  declarations: [TrabalheComponent],
  bootstrap: [TrabalheComponent]
})
export class TrabalheModule { }
