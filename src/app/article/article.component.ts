import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  votes: number;
  title: string;
  link: string;

  constructor() {

    this.title = 'angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;

  }

  voteUp() {  // mettre hors du constructeur
    this.votes++;
  }
  voteDown() {  // mettre hors du constructeur
    this.votes--;
  }

  ngOnInit(): void {
  }

}


