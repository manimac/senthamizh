import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() user;
  @Input() user2;
  @Input() users;
  studentName = 'Child - Dinesh';

  childName = 'Rajiv';
  constructor() { }

  ngOnInit() {
    if(this.user)
      this.studentName = this.user;
    else if(this.user2)
      this.studentName = this.user2;
    else 
      this.studentName = this.users.user2;
  }

}
