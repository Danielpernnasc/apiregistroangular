import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaComponent } from './lista.component';

@NgModule ({
    imports: [
    RouterModule.forChild([
        {path: 'lista', component: ListaComponent}
    ])
    ]
    
})
export class ListaRoutingModule {

}