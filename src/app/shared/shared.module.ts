import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsUserLoggedDirective } from './direttives/is-user-logged.directive';



@NgModule({
  declarations: [
    IsUserLoggedDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IsUserLoggedDirective
  ]
})
export class SharedModule { }
