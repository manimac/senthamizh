import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  save(param){
    if(!param.name){
      alert("Please enter your name");
    }
    else if(!param.email){
      alert("Please enter your email");
    }
    else if(!param.phone){
      alert("Please enter your phone number");
    }
    else{
      alert("Success");
    }
  }
}
