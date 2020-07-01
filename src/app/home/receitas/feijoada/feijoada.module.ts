import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeijoadaComponent } from './feijoada.component';
import { AngularSvgIconModule } from 'angular-svg-icon';




@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
  ],
  declarations: [FeijoadaComponent],
  exports: [FeijoadaComponent]
})
export class FeijoadaModule { }
