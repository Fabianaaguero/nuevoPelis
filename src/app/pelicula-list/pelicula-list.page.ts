import { Component, OnInit } from '@angular/core';
import { DbMovieService } from '../services/db-movie.service';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.page.html',
  styleUrls: ['./pelicula-list.page.scss'],
})
export class PeliculaListPage implements OnInit {

  peliculas: any; 
  constructor(
    private ApiMovieService: DbMovieService
  ) { }

  ngOnInit() {
    this.ApiMovieService.ListMovie()
    .subscribe( res =>{
      //console.log(res);
      this.peliculas = res.results;
    })
  }

}
