import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DbMovieService}from '../services/db-movie.service';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileId: string | null |undefined;
  movie:any;
  constructor(
    private activate:ActivatedRoute, 
    private ApiMovieService : DbMovieService
    ) { }

  ngOnInit() {

    this.profileId = this.activate.snapshot.paramMap.get('id');
   this.ApiMovieService.ViewProfile(this.profileId)
    .subscribe(res=>{
      this.movie = res;
      console.log(res);
    })

  }

  SheredSocial(){

    Share.share({
      title: 'Recomendacion de pelicula ',
      text: 'Mira esta pelicula ',
      url: this.movie.homepage,
    });
  }

}
