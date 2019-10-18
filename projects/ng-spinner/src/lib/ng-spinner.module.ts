import { NgModule } from '@angular/core';
import { NgSpinnerComponent } from './ng-spinner.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NgSpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [NgSpinnerComponent]
})
export class NgSpinnerModule { }
