import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcogueComponent } from './acogue.component';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { ModalCarneComponent } from './modal-carne/modal-carne.component';

@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
  declarations: [AcogueComponent, ModalCarneComponent],
  bootstrap: [AcogueComponent]
})
export class AcogueModule { }
