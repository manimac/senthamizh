import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
// import {CsvService} from 'angular2-json2csv'


import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  search: any;
  posts: any;
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
  constructor(private http: HttpClient) { 
    this.loadPosts();
  }

  loadPosts(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
      (response)=>{
        this.posts = response;
       },
      (error)=>{

      })
  }

  addUser(){
    let params={
      name: 'Raj',
      age:20
    }
    this.http.post("",params).subscribe(
      (response)=>{
        
       },
      (error)=>{

      })
  }

  ngOnInit() {
  }

  fileUpload(ev){
    console.log(ev.target.files);
    let fd = new FormData();
    fd.append('files', ev.target.files);
    fd.append('name','rajkumar');

    // this.http.post("",fd).subscribe(
    //   (response)=>{
        
    //    },
    //   (error)=>{

    //   })

    const toBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

    console.log(toBase64(ev.target.files[0]))

  }

  export(){

    const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: false, 
      showTitle: true,
      title: 'My CSV',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      filename: 'test'
      // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };

    const csvExporter = new ExportToCsv(options);
 
    csvExporter.generateCsv(this.students);
  }


}
