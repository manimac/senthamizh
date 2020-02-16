import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToDollar'
})
export class ConvertToDollarPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value * 1;
  }

}
