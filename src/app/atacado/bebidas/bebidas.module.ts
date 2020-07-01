import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BebidasComponent } from './bebidas.component';
// import { BebidasRoutingModule } from './bebidas-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
// import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    // BebidasRoutingModule,
    AngularSvgIconModule
    // ModalModule.forRoot()
  ],
  declarations: [BebidasComponent, ModalComponent],
  bootstrap: [ BebidasComponent ],
  // entryComponents: [ ModalComponent ]
})
export class BebidasModule { }
