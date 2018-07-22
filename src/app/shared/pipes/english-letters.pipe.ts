import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'englishLetters'
})
export class EnglishLettersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const res =  value.toString().replace(/[^a-zA-Z0-9 ]/g, '');
    return res.length > 35 ? res.slice(0, 35) + '...' : res;
  }
}
