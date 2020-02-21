import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  stu = {
    name: "test",
    contact: {
      email: "hdfb",
      phone: "7958768"
    }
  }
  studentsForm: FormGroup;
  todoForm: FormGroup;
  constructor(private Http: HttpClient) { }

  ngOnInit() {
    this.studentsForm = new FormGroup({
      name : new FormControl("", Validators.compose([Validators.required, Validators.minLength(2)])),
      contact: new FormGroup({
        email : new FormControl("", Validators.required),
        phone : new FormControl("")
      })      
    })
    this.studentsForm.setValue(this.stu);


    this.todoForm = new FormGroup({
      userId : new FormControl("", Validators.compose([Validators.required, Validators.minLength(2)])),
      id : new FormControl("", Validators.compose([Validators.required, Validators.minLength(2)])),
      title : new FormControl("", Validators.compose([Validators.required, Validators.minLength(2)])),
      completed : new FormControl("", Validators.compose([Validators.required, Validators.minLength(2)])),
    })
    
    this.loadData();
  }

  save(){
    console.log(this.studentsForm.valid);
    console.log(this.studentsForm.value);
  }

  clear(){
    this.studentsForm.reset();
  }

  loadData(){
    this.Http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(
      (response)=>{
        this.todoForm.setValue(response);
      },
      (error) =>{

      }
    )
  }

}
