import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {PokemonDetailsComponent} from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent,
  },
  {
    /** otherwise redirect to main page */
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
