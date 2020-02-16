import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  childUserName;
  @ViewChild(ChildComponent, {static: true}) child;
  constructor() { }

  ngOnInit() {
    this.childUserName = this.child.childName;
  }

  params = {
    user1: 'Dinesh',
    user2: 'Vignesh'
  }

}
