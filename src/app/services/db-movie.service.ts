import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarteleraResponse} from "../interface/cartelera_response"





@Injectable({
  providedIn: 'root',
})
export class DbMovieService {

  constructor(
    private http :HttpClient
  ) { }

  // Buscar por id 
  SearchForId( Text: String) {

    return this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/search/movie?api_key=f94aa13f0bf3664d4f542fa08948a210&language=en-US&query='+Text+'&page=1&include_adult=false');
  }
  

  //listado de peliculas 
  ListMovie(){
    let peliculas : object;
    return this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=f94aa13f0bf3664d4f542fa08948a210&language=en-US&page=1');
  }

  //descripcion de peliculas 
  ViewProfile( Id :  string | null |undefined){
    return  this.http.get('https://api.themoviedb.org/3/movie/'+Id+'?api_key=f94aa13f0bf3664d4f542fa08948a210&language=en-US');
  }


}
