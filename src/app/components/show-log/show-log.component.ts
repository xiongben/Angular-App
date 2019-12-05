import { Component, OnInit } from '@angular/core';
import { MessageService } from './../../message.service';

@Component({
  selector: 'app-show-log',
  templateUrl: './show-log.component.html',
  styleUrls: ['./show-log.component.css']
})
export class ShowLogComponent implements OnInit {
  public message:any;

  constructor(
    private messageService:MessageService,
  ) { }

  ngOnInit() {
    this.getMessData();
    this.messageService.testObservable();
    this.testSubject1();
    this.testSubject2();
  }

  getMessData(){
    var data = this.messageService.getMess().subscribe(res => {
      console.log(res);
      this.message = res;
    });
    
  }

  testSubject1(){
    var subject = this.messageService.getsubject();
    subject.subscribe({
      next: (v) => {console.log('observe a:' + v)}
    });
  }

  testSubject2(){
    var subject = this.messageService.getsubject();
    subject.subscribe({
      next: (v) => {console.log('observe b:' + v)}
    });
  }

}
