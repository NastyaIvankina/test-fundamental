import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProductColumns'
})
export class FilterProductColumnsPipe implements PipeTransform {
  transform(values: any[] = [], searchTerm: string = '', columnName: string = ''): any[] {
    if (!searchTerm) {
        return values;
    }
    if (columnName) {
        values = values.filter(item => item[columnName].toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    } else {
        values = values.filter(item => item.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    }
    return values;
}

}
