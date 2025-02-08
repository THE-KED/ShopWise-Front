import {Injectable, Input} from '@angular/core';
import {Article} from './article';
import {Subject, tap} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles:Article[] = [];
  public articleSubject:Subject<Article[]> = new Subject<Article[]>();
  host="192.168.135.134:5000"
  constructor(private http:HttpClient) { }
  next(){
    this.articleSubject.next(this.articles.slice());
  }

  findProduct(product:string){
    console.log("find2");
    let params = new HttpParams();
    params.set('query', product);
    this.http.get<Article[]>("http://"+this.host+"/search",{params:params}).pipe(
      tap(data =>{
        console.log("find3");
        this.articles=data;
      })
    ).subscribe(data =>{
      this.next();
    })
  }
}
