import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrudUsuariosComponent } from './usuarios/crud-usuarios/crud-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudUsuariosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
