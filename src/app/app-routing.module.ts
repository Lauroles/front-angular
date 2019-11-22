import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RessourceComponent} from './ressource/ressource.component';


const routes: Routes = [
  {
    path: 'ressource',
    component: RessourceComponent
  },
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'ressource'
},
  {
    path: '**',
    redirectTo: 'ressource'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
