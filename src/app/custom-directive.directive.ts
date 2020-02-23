import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor() { 
    // console.log("test");
  }

  @HostBinding('style.background') styleProp;
  @HostListener('click') test(){
    this.styleProp = 'red';
  }

  @HostBinding('style.color') hoverProp;
  @HostListener('mouseover') test2(){
    this.hoverProp = 'blue';
  }
  @HostListener('mouseout') test3(){
    this.hoverProp = 'black';
  }

}
