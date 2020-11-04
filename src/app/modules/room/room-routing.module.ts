import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './room.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RoomComponent,
    canActivate: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
