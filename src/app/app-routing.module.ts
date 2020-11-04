import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLayoutComponent } from './modules/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: 'transition',
        loadChildren: () => import('./modules/transition/transition.module').then(m => m.TransitionModule),
        canActivate: [],
        canLoad: []
      },
      {
        path: 'room/:id',
        loadChildren: () => import('./modules/room/room.module').then(m => m.RoomModule),
        canActivate: [],
        canLoad: []
      },
      {
        path: '',
        loadChildren: () => import('./modules/main-page/main-page.module').then(m => m.MainPageModule)
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
