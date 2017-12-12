import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DiscosComponent } from './discos/discos.component';
import { DiscoComponent } from './disco/disco.component';
import { NuevoDiscoComponent } from './nuevo-disco/nuevo-disco.component';
import {Routes, RouterModule} from '@angular/router';

const appRoutes : Routes = [
  { path: 'discos', component: DiscosComponent },
  { path: 'discos/nuevo', component: NuevoDiscoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DiscosComponent,
    DiscoComponent,
    NuevoDiscoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
