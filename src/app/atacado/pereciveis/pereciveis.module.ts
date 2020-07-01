import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PereciveisComponent } from './pereciveis.component';
// import { PereciveisRoutingModule } from './pereciveis-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ModalFriosComponent } from './modal-frios';

@NgModule({
  imports: [
    CommonModule,
    // PereciveisRoutingModule,
    AngularSvgIconModule
  ],
  declarations: [
    PereciveisComponent,
    ModalFriosComponent
  ],
  bootstrap: [PereciveisComponent]
})
export class PereciveisModule { }
