import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HigieneComponent } from './higiene.component';
// import { HigieneRoutingModule } from './higiene-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ModalHigieneComponent } from './modal-higiene/modal-higiene.component';

@NgModule({
  imports: [
    CommonModule,
    // HigieneRoutingModule,
    AngularSvgIconModule
  ],
  declarations: [
    HigieneComponent,
    ModalHigieneComponent
  ],
})
export class HigieneModule { }
