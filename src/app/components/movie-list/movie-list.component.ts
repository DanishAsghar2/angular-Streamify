import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  searchQuery: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.searchMovies('Egypt'); // Default search query
  }

  searchMovies(query: string): void {
    this.movieService.searchMovies(query).subscribe({
      next: (data: any) => {
        this.movies = data.map((item: any) => item.show); // Extract 'show' objects
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
      },
    });
  }
}
