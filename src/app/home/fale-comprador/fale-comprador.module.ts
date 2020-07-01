import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaleCompradorComponent } from './fale-comprador.component';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FaleCompradorComponent],
  imports: [
    CommonModule,
    TextMaskModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FaleCompradorModule { }
