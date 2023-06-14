import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import {DbMovieService} from '../services/db-movie.service';
import {RouterModule} from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CustomImputComponent } from './components/custom-imput/custom-imput.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CustomImputComponent
  ],
  exports: [ 
    HeaderComponent,
    CustomImputComponent
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
