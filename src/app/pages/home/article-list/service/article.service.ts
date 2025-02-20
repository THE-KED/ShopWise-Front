import {Injectable} from '@angular/core';
import {Article} from './article';
import {catchError, Subject, tap, throwError, timeout} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles:Article[] = [];
  public articleSubject:Subject<Article[]> = new Subject<Article[]>();
  host="192.168.1.135:5000";
  localHost="127.0.0.1:5000";

  constructor(private http:HttpClient) { }
  next(){

    this.articleSubject.next(this.articles.slice());
  }

  findProduct(product:string){
    let params = new HttpParams();
    params.set('query',product);
    console.log("find2",product);
    return this.http.get<Article[]>("http://"+this.host+"/search?query="+product).pipe(
      timeout(25000),
      tap(data =>{
        console.log("find3");
        this.articles=data;
        console.log(data);
      }),
      catchError(err => {
        console.error("err",err)
        return throwError(err);
      })
    );
  }
}
