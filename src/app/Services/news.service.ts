import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient){ }

  getNews(parameters:any): Observable<any> {
    const url = 'https://newsapi.org/v2/top-headlines?country='
    +parameters.pais+
    '&category='
    +parameters.categoria+
    '&apiKey=036d0e62c7724afea656f4f44b87b354'
  
    return this.http.get(url);
  }
}
