import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliculaListPageRoutingModule } from './pelicula-list-routing.module';

import { PeliculaListPage } from './pelicula-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculaListPageRoutingModule
  ],
  declarations: [PeliculaListPage]
})
export class PeliculaListPageModule {}
