import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import {DbMovieService} from '../services/db-movie.service';
import {RouterModule} from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [

  ],
  exports: [ 

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [

    DbMovieService]
})
export class SharedModule { }
