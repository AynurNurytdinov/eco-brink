import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news = '/assets/data/news.json';

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get(this.news);
  }
}
