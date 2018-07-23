import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringLength'
})
export class StringLengthPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    /*CHECKING IF IT IS ARRAY*/
    if (Array.isArray(value)) {
      const str = value.join(', ');
      return str.length > 30 ? str.slice(0, 30) + '...' : str;
    }
    /*IF IT IS STRING*/
    return value.length > 30 ? value.slice(0, 30) + '...' : value;
  }
}
