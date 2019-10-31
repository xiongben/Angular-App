import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  tableData: any[] = [{
    name: '水爷',
    date: '2017-08-19',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '大蛇丸',
    date: '2017-08-20',
    address: '上海市普陀区金沙江路 1518 弄 火影村',
  }, {
    name: '卡卡西',
    date: '2017-08-21',
    address: '上海市普陀区金沙江路 1518 弄 ',
  }, {
    name: '斑爷',
    date: '2017-08-22',
    address: '上海市普陀区金沙江路 1510 弄',
  }];
  showdialog:boolean = false;
  dialogData:object = {};
  constructor() { }

  ngOnInit() {
  }

  handle(item){
    console.log(item);
    console.log(item.index);
    console.log(item.rowData)
  }
  test(even){
     console.log(even)
  }
  dialog(item){
    let itemdata = item.rowData;
    this.showdialog = true;
    this.dialogData = itemdata;
  }
}
