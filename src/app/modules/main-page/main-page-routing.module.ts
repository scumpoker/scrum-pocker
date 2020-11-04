import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { EnterRoomComponent } from './enter-room/enter-room.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'create',
        pathMatch: 'full',
        component: CreateRoomComponent
      },
      {
        path: 'enter',
        pathMatch: 'full',
        component: EnterRoomComponent
      },
      {
        path: '**',
        redirectTo: 'create'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
