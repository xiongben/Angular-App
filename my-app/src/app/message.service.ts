import { Injectable } from '@angular/core';
import {of,BehaviorSubject,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public data:any = new BehaviorSubject<string>('start');
  public data1:any = Observable.create(function subscribe(observer) {
    var id = setTimeout(()=>{
      observer.next("hi");
    },3000);
  });
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
  constructor(
    public message: MessageService
  ) { }

  changeMess(value) {
    this.data.next(value);
    
    // this.data = value;
    // console.log(this.data);
  }

  getMess() {
    return this.data;
  }

  testObservable(){
    this.data1.subscribe(x => console.log("this is :" + x));
  }

}
