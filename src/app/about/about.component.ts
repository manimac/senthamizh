import { Component, OnInit } from '@angular/core';
import {CsvService} from 'angular2-json2csv'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  students = [
    {
      name: 'Dinesh',
      age: '20'
    },
    {
      name: 'Vicky',
      age: '23'
    },
    {
      name: 'Rajeev',
      age: '24'
    }
  ]
  constructor(private csv: CsvService) { 
    this.csv.download(this.students, 'students');
  }

  ngOnInit() {
  }

  

}
