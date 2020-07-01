import { Routes, RouterModule } from "@angular/router";
import { HortifrutiComponent } from './hortifruti.component';
import { PageoneComponent } from './pageone';
import { PagetwoComponent } from './pagetwo';
import { PagethreeComponent } from './pagethree';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '', component: HortifrutiComponent, children: [
            {
                path: '1', component: PageoneComponent
            },
            {
                path: '2', component: PagetwoComponent
            },
            {
                path: '3', component: PagethreeComponent
            },
            {
                path: '', redirectTo: '1', pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HortifrutiRoutingModule {}
