import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransitionComponent } from './transition.component';
import { TransitionRoutingModule } from './transition-routing.module';



@NgModule({
  declarations: [TransitionComponent],
  imports: [
    CommonModule,
    TransitionRoutingModule
  ],
  exports: [TransitionComponent]
})
export class TransitionModule { }
