import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorComponent } from './fornecedor.component';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FornecedorComponent],
  imports: [
    CommonModule,
    TextMaskModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FornecedorModule { }
