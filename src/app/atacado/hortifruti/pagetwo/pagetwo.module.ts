import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagetwoComponent } from './pagetwo.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ModalHortifrutiComponent } from './modal-hortifruti/modal-hortifruti.component';


@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
  declarations: [
    PagetwoComponent,
    ModalHortifrutiComponent

  ]
})
export class PagetwoModule { }
