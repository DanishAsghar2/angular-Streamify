import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://api.tvmaze.com'; // Base URL for the TVMaze API

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    console.log('Sending request to API:', `${this.apiUrl}/search/shows?q=${query}`); // Log API request URL
    return this.http.get(`${this.apiUrl}/search/shows?q=${query}`);
  }
}
