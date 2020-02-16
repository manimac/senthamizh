import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class Home {

  color: string = 'yellow';
  val: any;
  private studentName: string = '<b>Rajiv</b>';
  showDiv = false;
  price1 = 100;
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

  showClass = false;

  toggleClass(){
    this.showClass = !this.showClass;
  }

  styleProp = {
    background: 'blue',
    color: 'green',
    fontSize: '23px'
  }

  changeColor(){
    this.styleProp.background = this.color;
  }
}
