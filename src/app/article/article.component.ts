import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article!: Article; // si enleve le constructeur , mettre !
  constructor() {

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


