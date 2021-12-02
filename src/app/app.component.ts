import { Component } from '@angular/core';
import { NewsService } from './Services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listado: any[]=[];

  constructor(private news: NewsService){}

  buscarNoticia(parameters:any){
    console.log("soy el padre");
    console.log(parameters);

    this.news.getNews(parameters).subscribe(news => {
      console.log(news);
      this.listado = news.articles;
    },error => {
      console.log(error);
    })
  }
}
