import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
// import { ModalHortifrutiComponent } from './modal-hortifruti/modal-hortifruti.component';
import { HortifrutiComponent } from './hortifruti.component';
import { HortifrutiRoutingModule } from './hortifruti-rotuing.module';



@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    HortifrutiRoutingModule
  ],
  declarations: [
    HortifrutiComponent,
    // ModalHortifrutiComponent
  ],
})
export class HortifrutiModule { }
