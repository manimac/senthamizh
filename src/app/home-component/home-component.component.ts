import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class Home {

  val: any;
  private studentName: string = '<b>Rajiv</b>';
  showDiv = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){

  }

  toggleDiv(){
    this.showDiv = !this.showDiv;
  }

  checkVal(param){
    this.val = param;
  }

}
