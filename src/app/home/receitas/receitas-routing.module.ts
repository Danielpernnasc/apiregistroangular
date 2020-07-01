import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { FeijoadaComponent } from './feijoada';
import { PernilComponent } from './pernil';
import { QuibeComponent } from './quibe';
import { TortapalmComponent } from './tortapalm';
import { EspaguetecarboComponent } from './espaguetecarbo';
import { StrogonoffComponent } from './strogonoff';

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
};
const routes: Routes = [
    {path: 'receitas/feijoada', component: FeijoadaComponent},
    {path: 'receitas/pernil_lanches', component: PernilComponent},
    {path: 'receitas/quibe_bandeja', component: QuibeComponent},
    {path: 'receitas/torta_palmito', component: TortapalmComponent},
    {path: 'receitas/espaguete_carbonara', component: EspaguetecarboComponent},
    {path: 'receitas/strogonoff', component: StrogonoffComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class ReceitasRoutingModule {}