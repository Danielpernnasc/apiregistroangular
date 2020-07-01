import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetComponent } from './pet.component';
import { AngularSvgIconModule } from 'angular-svg-icon';



@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
  declarations: [PetComponent],
})
export class PetModule { }
