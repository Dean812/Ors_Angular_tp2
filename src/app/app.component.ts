import { Component } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})
export class AppComponent {
  title = 'ProjectTp2';
  articles: Article[];

  constructor(private service: ArticleService) {
    this.articles = [
      new Article('truc', 'https://www.codetogether.com/', 15),
      new Article('machin', 'https://www.bitechworld.com/fr/base-de-donn%C3%A9es-sql/', 7),
      new Article('chouette', 'https://screensiz.es/tablet', 54),
      new Article('mono', 'https://www.similartech.com/api', 20),
    ];
    service.sayHello();
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

