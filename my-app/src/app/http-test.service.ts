import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable ,from} from 'rxjs';
import { Options } from 'selenium-webdriver/safari';

@Injectable({
  providedIn: 'root'
})
export class HttpTestService {
// private getUrl: string = "http://localhost:5000";
private getUrl: string = "http://localhost:3001/angular";

constructor(
  private http: HttpClient
) { }

getTestData(){
  return this.http.get(this.getUrl,{params:{"sss":"dddd"}});
}

getTestResponse(){
  return this.http.get(this.getUrl,{observe: 'response'});
}

}
