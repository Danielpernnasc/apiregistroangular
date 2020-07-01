import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    ReactiveFormsModule
  ],
  declarations: [NewsletterComponent],
})
export class NewsletterModule { }
