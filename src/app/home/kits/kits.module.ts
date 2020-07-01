import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitsComponent } from './kits.component';
import { ModalModule } from './modal';
import { AngularSvgIconModule } from 'angular-svg-icon';



@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    ModalModule
  ],
  declarations: [KitsComponent],
})
export class KitsModule { }
