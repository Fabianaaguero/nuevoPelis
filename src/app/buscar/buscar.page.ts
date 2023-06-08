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

  peliculas: any;
  constructor(
    private ApiMovieService:DbMovieService
  ) { }

  ngOnInit() {
  }

  buscarPelicula(texto: String){
    texto = texto.trim();
    if(texto.length === 0){
      return;
    }

    this.ApiMovieService.SearchForId(texto)
    .subscribe((data: any)=>{
      //console.log(data);
      this.peliculas=data.results;
      const miCampo = document.getElementById("miCampo") as HTMLInputElement;
    miCampo.value = "";
    })
    //console.log(texto);
  }

}
