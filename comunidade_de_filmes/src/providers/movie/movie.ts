import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  api_key = "36766c52f992957afedb1143c08c2776";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getMovie() {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=pt-BR&page=1`);
  }
  saveComment(comment, movie_id) {
    var stored_comments = localStorage.getItem("comments");
    var comments = [];
    if (stored_comments) {
      comments = JSON.parse(stored_comments);
    }
    comments.push({
      comment: comment,
      date: new Date(),
      movie_id: movie_id
    })
    localStorage.setItem("comments", JSON.stringify(comments));
  }
  getComments(movie_id) {
    var stored_comments = localStorage.getItem("comments");
    var comments = [];
    if (stored_comments) {
      comments = JSON.parse(stored_comments);
      comments = comments.filter(c => c.movie_id == movie_id);
    }
    return comments;
  }
}
