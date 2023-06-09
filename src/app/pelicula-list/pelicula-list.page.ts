import { Component, OnInit } from '@angular/core';
import { DbMovieService } from '../services/db-movie.service';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.page.html',
  styleUrls: ['./pelicula-list.page.scss'],
})
export class PeliculaListPage implements OnInit {

  Page : number = 0;
  characters : any[] = [];
  constructor(
    private ApiMovieService: DbMovieService
  ) { }

  ngOnInit() {
    this.Page=0 ;
    this.GetChacters();

  }

  GetChacters(event?: any ){
    try{
      this.Page +=1 ;
    this.ApiMovieService.ListMovie(this.Page).subscribe(res => {
      this.characters.push(...res.results)
      console.log(this.characters)
      console.log(this.Page);
      if(event) event.target.complete();
    })
    }
    catch(err : any ) {
      console.log(err);
      if (event) event.target.complete();
    }
    


  }
}
// his.ApiMovieService.ListMovie(page)
//     .subscribe( res =>{
//       console.log(res);
//       this.peliculas = res.results;
//     