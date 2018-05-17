import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addressFilter'
})
export class AddressFilterPipe implements PipeTransform {

  transform(list: any[], filteredByField: string, filterValue: string): any {
    if (!filteredByField || !filterValue) { return list; }
    return list.filter(item => {
      const field = item[filteredByField].toLowerCase();
      return field.indexOf(filterValue) >= 0;
    });
  }

}
