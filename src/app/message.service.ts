import { Injectable } from '@angular/core';
import {of,BehaviorSubject,Observable,Subject, from,interval, timer} from 'rxjs';
import { map,takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public data:any = new BehaviorSubject<string>('start');
  public data1:any = Observable.create(function subscribe(observer) {
    var id = setTimeout(()=>{
      observer.next("hi1");
      observer.next("hi2");
      observer.next("hi3");
    },3000);
  });
  public subject1:any = new Subject();
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
  
  getsubject(){
    return this.subject1;
  }

  testSubject(val){
     this.subject1.next(val);
  }
  testmap(){
    // var observe1 = from([1,2,3,4,5]);
    // var map1 = observe1.pipe(map(x=> x*10));
    // map1.subscribe(x => console.log("this is :" + x));
    const source = interval(1000);
    const time1 = timer(6000);
    // const source = timer(3000);
    var example = source.pipe(takeUntil(time1));
    example.subscribe(x => console.log("this is :" + x));
  }
}
