import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {InputIcon} from 'primeng/inputicon';
import {IconField} from 'primeng/iconfield';
import {FormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import {ArticleService} from '../article-list/service/article.service';

@Component({
  selector: 'app-search',
  imports: [
    InputIcon,
    IconField,
    FormsModule,
    InputText,
    Button
  ],
  templateUrl: './search.component.html',
  standalone: true,
  styleUrl: './search.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchComponent {
  product:string="";

  constructor(private articleService: ArticleService) {
  }
  find(){
    console.log("find",this.product);
    this.articleService.findProduct(this.product);
  }
}
