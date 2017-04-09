import { Pipe, PipeTransform } from '@angular/core';
import { Injectable } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(value: any, args:any[]): any {
      if (args && Array.isArray(value)) {
          let filterKeys = Object.keys(args);
          return value.filter(item =>
              filterKeys.reduce((memo, keyName) =>
                  !args[keyName] || (memo && String(item[keyName]).indexOf(args[keyName]) != -1), true ));
      }
      else { return value; }
    }
}
