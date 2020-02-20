import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  user;
  constructor() { }

  setValue(param){
    this.user = param;
  }

  getValue(){
    return 'service call...dddd';
  }
}
