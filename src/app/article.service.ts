import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  sayHello() {
    console.log('Hello from service');
  }

  getArticles(): Article[] {
    return [
      new Article('truc', 'https://www.codetogether.com/', 15),
      new Article('machin', 'https://www.bitechworld.com/fr/base-de-donn%C3%A9es-sql/', 7),
      new Article('chouette', 'https://screensiz.es/tablet', 54),
      new Article('mono', 'https://www.similartech.com/api', 20),
    ]
  }



}
