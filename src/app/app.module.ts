import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { HazemComponent } from './components/hazem/hazem.component';
import { ZeinabComponent } from './components/zeinab/zeinab.component';
import { OlegComponent } from './components/oleg/oleg.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    HazemComponent,
    ZeinabComponent,
    OlegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
