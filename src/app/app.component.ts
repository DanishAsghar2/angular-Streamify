import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from './services/movie.service'; 
import { StripHtmlPipe } from './pipes/strip-html.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, StripHtmlPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  movies: any[] = [];
  searchQuery: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.searchMovies('Egypt');
  }

  searchMovies(query: string): void {
    if (query.trim()) {
      this.movieService.searchMovies(query).subscribe({
        next: (data: any) => {
          this.movies = data.map((item: any) => ({
            name: item.show.name,
            summary: item.show.summary,
            image: item.show.image || { medium: 'https://via.placeholder.com/210x295' },
          }));
          console.log('Fetched Movies:', this.movies); 
        },
        error: (err) => {
          console.error('Error fetching movies:', err);
          this.movies = [];
        },
      });
    } else {
      this.movies = [];
    }
  }
}
