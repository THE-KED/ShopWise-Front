import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, tap, throwError, timeout} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  host="192.168.1.135:5000";
  localHost="127.0.0.1:5000";
  username="";
  isAuth:boolean=false;
  constructor(private http:HttpClient) { }


  signIn(email:string, password:string){
    let body = {email,password};
    console.log("password",password);
    return this.http.post("http://"+this.host+"/login",body).pipe(
      timeout(25000),
      tap(data =>{
        console.log("token: ",data);
        this.isAuth=true;
        this.username=email;
      }),
      catchError(err => {
        console.error("err",err)
        return throwError(err);
      })
    );
  }

  signOn(email:string, password:string){
    let body = {email,password};
    console.log("password",password);
    return this.http.post("http://"+this.host+"/register",body).pipe(
      timeout(25000),
      tap(data =>{
        console.log("token: ",data);
        this.isAuth=true;
        this.username=email;
      }),
      catchError(err => {
        console.error("err",err)
        return throwError(err);
      })
    );
  }

  signOut() {
    return this.http.post("http://"+this.host+"/logout",null).pipe(
      timeout(25000),
      tap(data =>{
        console.log("logout: ",data);
        this.isAuth=false;
      }),
      catchError(err => {
        console.error("err",err)
        return throwError(err);
      })
    );
  }
}
