import { Component } from '@angular/core';
import { NewsService } from './Services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listado: any[]=[];
  cargar = false;

  constructor(private news: NewsService){}

  buscarNoticia(parameters:any){
    this.cargar = true;
    this.listado = [];

    setTimeout(() =>{
      this.news.getNews(parameters).subscribe(news => {
        this.cargar=false;
        this.listado = news.articles;
      },error => {
        console.log(error);
        this.cargar=false;
      })
    },1000);
  }
}
