import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ReceitasComponent } from './receitas.component';
import { ReceitasRoutingModule } from './receitas-routing.module';
import { FeijoadaModule } from './feijoada';
import { QuibeModule } from './quibe';
import { PernilModule } from './pernil';
import { TortapalmModule } from './tortapalm';
import { EspaguetecarboModule } from './espaguetecarbo';
import { StrogonoffModule } from './strogonoff';




@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    FeijoadaModule,
    QuibeModule,
    PernilModule,
    TortapalmModule,
    EspaguetecarboModule,
    StrogonoffModule,
    ReceitasRoutingModule
  ],
  declarations: [ReceitasComponent],
  exports: [ReceitasComponent]
})
export class ReceitasModule { }
