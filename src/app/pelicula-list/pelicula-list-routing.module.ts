import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculaListPage } from './pelicula-list.page';

const routes: Routes = [
  {
    path: '',
    component: PeliculaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculaListPageRoutingModule {}
