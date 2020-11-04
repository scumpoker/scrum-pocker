import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLayoutModule } from './modules/user-layout/user-layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
