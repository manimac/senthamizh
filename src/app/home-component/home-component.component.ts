import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class Home {

  color: string = 'yellow';
  val: any;
  studentName: string = '<b>Rajiv</b>';
  showDiv = false;
  price1 = 100;
  serviceText;
  constructor(private service1: CommonService) {
    this.serviceText = this.service1.getValue();
   }

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
