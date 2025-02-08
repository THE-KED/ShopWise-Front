import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {ArticleComponent} from './article/article.component';
import {ArticleService} from './service/article.service';
import {Article} from './service/article';

@Component({
  selector: 'app-article-list',
  imports: [
    ArticleComponent
  ],
  templateUrl: './article-list.component.html',
  standalone: true,
  styleUrl: './article-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ArticleListComponent implements OnInit{
  articles:Article[]=[];

  constructor(private articlesService:ArticleService) {
  }

  ngOnInit(): void {
    this.articlesService.articleSubject.subscribe(articles => {
      this.articles = articles
    });
    this.articlesService.next();
  }

}
