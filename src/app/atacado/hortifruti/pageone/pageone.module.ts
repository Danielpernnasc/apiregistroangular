import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PageoneComponent } from './pageone.component';
import { ModalHortifrutiComponent } from './modal-hortifruti/modal-hortifruti.component';


@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
  declarations: [
    PageoneComponent,
    ModalHortifrutiComponent
  ],
  exports: []
})

export class PageoneModule { }
