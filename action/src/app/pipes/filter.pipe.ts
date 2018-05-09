import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filteredByField: string, filterValue: string): any {
    if (!filteredByField || !filterValue) { return list; }
    return list.filter(item => {
      const field = item[filteredByField].toLowerCase();
      // const filter = filterValue.toLowerCase();
      return field.indexOf(filterValue) >= 0;
    });
  }

}
