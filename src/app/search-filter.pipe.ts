import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any, ...args: any[]): any {
    if (!items || !args) {
      return items;
  }
  return items.filter(item => item.age.indexOf(args) !== -1);
  }

}
