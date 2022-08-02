import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  sayHello() {
    console.log('Hello from service');
  }
}
