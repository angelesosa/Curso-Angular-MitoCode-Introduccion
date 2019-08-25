import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { PerroComponent } from './perro/perro.component';
import { GatoComponent } from './gato/gato.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    PerroComponent,
    GatoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
