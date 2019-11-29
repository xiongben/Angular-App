import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpTestService} from '../http-test.service';
import { from,  } from 'rxjs';


@Component({
  selector: 'app-child-test',
  templateUrl: './child-test.component.html',
  styleUrls: ['./child-test.component.css'],
  animations: [
    trigger('openClose',[
      state('open',style({
        height: '200px',
        opacity:1,
        backgroundColor: 'yellow'
      })),
      state('closed',style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green',
      })),
      transition('open => closed', animate('1s')),
      transition('closed => open', [animate('0.5s')])
    ])
  ],
})
export class ChildTestComponent implements OnInit {
  private _name: string;
  public color: string = "red";
  public birthday: Date = new Date(1993, 3, 19);
  public formName = new FormControl();
  public xbname: string;
  isopen:boolean = true;
  aa: number[] = [];
  
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  testarr: number[] = [112,334,23,45,678,456,22,12,565];
  // @Input() name: string;
  @Output() voted = new EventEmitter<number>();
  constructor(
    private httptestservice: HttpTestService
  ) {
    // console.log(this.birthday)
  }
 
  ngOnInit() {
    // this.getHttpData();
    // this.getHttpResponse();
  }

  @Input()
  set name(name: string) {
     this._name = name;
     console.log(this._name);
  }

  toggle() {
    this.isopen = !this.isopen;
  }
  handle($event){

  }
  vote(): void {
    console.log("vote child");
    this.voted.emit(10);
  }
  testfn(): void {
    console.log("child test method");
  }

  upformdata(): void {
    this.formName.setValue("xiongben");
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
  }

  getHttpData(){
    this.httptestservice.getTestData().subscribe( res => {
      console.log(res);
    })
  }
  getHttpResponse(){
    this.httptestservice.getTestResponse().subscribe( res => {
      console.log(res);
    })
  }

}
