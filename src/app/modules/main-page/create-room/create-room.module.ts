import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoomComponent } from './create-room.component';



@NgModule({
  declarations: [CreateRoomComponent],
  imports: [
    CommonModule
  ],
  exports: [CreateRoomComponent]
})
export class CreateRoomModule { }
