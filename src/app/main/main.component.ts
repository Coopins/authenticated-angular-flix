import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  searchResults = [];
  myMovieList =  [];
  title = 'Angular Flix';
  ngOnInit(): void {
    this.myMovieList = this.movieService.getMovieList();
    this.searchResults = this.movieService.getSearchResults();
    this.movieService.loadMovieList();
  }
}
