import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})
export class AppComponent implements OnInit{
  title = 'ProjectTp2';
  articles: Article[]=[new Article('tmp','tmp',0)]; // << initialise(sinon message d'erreur mais vide c'ets ok), mais sera ecrasé later

  constructor(private service: ArticleService) {


  }
  ngOnInit(): void {
    this.articles= this.service.getArticles();
    this. service.sayHello(); // this. car on sort du constructeur
  }











  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(`Adding article title: ${title.value} and link: ${link.value} `);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = ''; // reset values
    title.value = '';
    return false;
  }

  sortedArticle(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}

