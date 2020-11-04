import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterRoomComponent } from './enter-room.component';



@NgModule({
  declarations: [EnterRoomComponent],
  imports: [
    CommonModule
  ],
  exports: [EnterRoomComponent]
})
export class EnterRoomModule { }
