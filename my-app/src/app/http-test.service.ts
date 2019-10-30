import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable ,from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpTestService {
private getUrl: string = "http://localhost:5000";

constructor(
  private http: HttpClient
) { }

getTestData(){
  return this.http.get(this.getUrl);
}

getTestResponse(){
  return this.http.get(this.getUrl,{observe: 'response'});
}

}
