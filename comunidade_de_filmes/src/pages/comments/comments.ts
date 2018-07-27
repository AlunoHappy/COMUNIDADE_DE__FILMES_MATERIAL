import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {
  comments = [
    {
    comment: "adorei o filme",
    date: new Date()
     }, 
  {
    comment: "realmente muito bom",
    date: new Date()
  }
];
  movie_id: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private movieProvider: MovieProvider
  ) {
    this.movie_id = this.navParams.get("movie_id");
    this.getComments();
  }
  saveComment(comment) {
    this.movieProvider.saveComment(comment, this.movie_id);
    this.getComments();
  }
  getComments() {
    this.comments = this.movieProvider.getComments(this.movie_id);
  }
}
