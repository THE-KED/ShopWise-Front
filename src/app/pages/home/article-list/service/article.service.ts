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
  host="192.168.100.22:5000";
  constructor(private http:HttpClient) { }
  next(){
    this.articleSubject.next(this.articles.slice());
  }

  findProduct(product:string){
    let params = new HttpParams();
    params.set('query',product);
    console.log("find2",product);
    this.http.get<Article[]>("http://"+this.host+"/search?query="+product).pipe(
      tap(data =>{
        console.log("find3");
        this.articles=data;
        console.log(data);
      })
    ).subscribe(data =>{
      this.next();
    })
  }
}
