import { Injectable } from '@angular/core';
import {of,BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public data:any = new BehaviorSubject<string>('start');
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

}
