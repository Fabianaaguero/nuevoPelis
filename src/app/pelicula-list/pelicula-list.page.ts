import { Component, OnInit, ViewChild } from '@angular/core';
import { DbMovieService } from '../services/db-movie.service';
import { IonContent } from '@ionic/angular';




@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.page.html',
  styleUrls: ['./pelicula-list.page.scss'],
})
export class PeliculaListPage implements OnInit {
  // https://ionicframework.com/docs/api/content
  // El signo de exclamación ! después de content es 
  // una sintaxis de TypeScript llamada “definición de
  //  propiedad no nula”. Se utiliza para indicar al compilador
  //   que la propiedad content siempre tendrá un valor y nunca será nula o 
  //   indefinida. Esto permite al compilador realizar comprobaciones más estrictas
  //    y ayudar a prevenir errores en tiempo de ejecución
  @ViewChild(IonContent)
  content!: IonContent;

  Page: number =0;
  characters : any[] = [];

  constructor(
    private ApiMovieService: DbMovieService

  ) { }

  ngOnInit() {
    this.Page=0 ;
    this.GetChacters();

  }
  scrollToTop(){
    this.content.scrollToTop(500);
  }


  GetChacters(event?: any ){
    try{
      this.Page +=1 ;
    this.ApiMovieService.ListMovie(this.Page).subscribe(res => {
      this.characters.push(...res.results)
      //console.log(this.characters)
      //console.log(this.Page);
      if(event) event.target.complete();
    })
    }
    catch(err : any ) {
      console.log(err);
      if (event) event.target.complete();
    }
  }

}







