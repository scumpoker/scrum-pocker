import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { CreateRoomModule } from './create-room/create-room.module';
import { EnterRoomModule } from './enter-room/enter-room.module';


@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    CreateRoomModule,
    EnterRoomModule
  ],
  exports: [MainPageComponent]
})
export class MainPageModule { }
