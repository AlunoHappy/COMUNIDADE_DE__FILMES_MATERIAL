import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { CommentsPage } from '../comments/comments';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies: any;

  constructor(public navCtrl: NavController, 
    private movieProvider: MovieProvider
  ){
    this.movieProvider.getMovie().subscribe(movies => {
      this.movies = (movies as any).results
      console.log(movies);
    },error => {
        console.log(error);
      })
  }

  openComments(movie){
    this.navCtrl.push(CommentsPage,{
      movie_id:movie.id
    });
  }

}
