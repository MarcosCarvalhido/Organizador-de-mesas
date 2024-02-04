import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MesaComponent } from './quadro/mesa/mesa.component';
import { QuadroComponent } from './quadro/quadro.component';

@NgModule({
  declarations: [
    AppComponent,
    MesaComponent,
    QuadroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
