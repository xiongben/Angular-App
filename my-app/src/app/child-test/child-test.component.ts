import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-test',
  templateUrl: './child-test.component.html',
  styleUrls: ['./child-test.component.css']
})
export class ChildTestComponent implements OnInit {
  private _name: string;
  // @Input() name: string;
  @Output() voted = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  @Input()
  set name(name: string) {
     this._name = name;
     console.log(this._name);
  }
   
  vote(): void {
    console.log("vote child");
    this.voted.emit(10);
  }
  testfn(): void {
    console.log("child test method");
  }
}
