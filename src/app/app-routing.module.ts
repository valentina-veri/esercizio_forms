import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattoDetailComponent } from './contatto-detail/contatto-detail.component';
import { ContattiListComponent } from './contatti-list/contatti-list.component';
import { ContattoAddComponent } from './contatto-add/contatto-add.component';
import { ContattoModificaComponent } from './contatto-modifica/contatto-modifica.component';

const routes: Routes = [
  {path:'contatti-list', component:ContattiListComponent},
  {path:'contatti-dettaglio/:id', component:ContattoDetailComponent},
  {path:'contatti-add', component:ContattoAddComponent},
  {path:'contatti-modifica/:id', component:ContattoModificaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
