import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {


  article: Article;
  constructor() {
    this.article = new Article(
      'angular 2',
      'http://angular.io',
      10
    )
  }

  voteUp(): boolean {
    this.article.votes++;
    return false
  }
  voteDown(): boolean {
    this.article.votes--;
    return false
  }

  ngOnInit(): void {
  }

}


