import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ContattoDetailComponent } from './contatto-detail/contatto-detail.component';
import { ContattiListComponent } from './contatti-list/contatti-list.component';
import { ContattoAddComponent } from './contatto-add/contatto-add.component';
import { ContattoModificaComponent } from './contatto-modifica/contatto-modifica.component';

@NgModule({
  declarations: [
    AppComponent,
    ContattoDetailComponent,
    ContattiListComponent,
    ContattoAddComponent,
    ContattoModificaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
