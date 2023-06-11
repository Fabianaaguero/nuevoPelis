import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
//import { SharedModule } from '../shared/shared.module';
import { DbMovieService } from '../services/db-movie.service'; 

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  characters : any= [];
  peliculas: any;
  constructor(
    private ApiMovieService:DbMovieService
  ) { }

  ngOnInit() {
  }




  SearCharacters(text : any){
    //console.log(text);
    text= text.trim();
    this.ApiMovieService.SearchForId(text).subscribe(res =>{
          //console.log(res);
          this.characters = res.results;
          //console.log(this.characters)
          const miCampo = document.getElementById("miCampo") as HTMLInputElement;
          miCampo.value = "";
    })

  // buscarPelicula(texto: String){
  //   texto = texto.trim();
  //   if(texto.length === 0){
  //     return;
  //   }

  //   this.ApiMovieService.SearchForId(texto)
  //   .subscribe((data: any)=>{
  //     //console.log(data);
  //     this.peliculas=data.results;
  //     const miCampo = document.getElementById("miCampo") as HTMLInputElement;
  //   miCampo.value = "";
  //   })
  //   //console.log(texto);
  }

}
