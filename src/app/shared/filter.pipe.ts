import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  //7tena el value elly hn3mlha pass ll filter hea el array productList
  transform(value: any[], filterString: string, propName: string): any[] {
    const result: any = [];

    if (!value || filterString === '' || propName === '') {
      return value;
    }

    // a:any m3naha eno y loop f el value array
    // trim() removes whitespace from both sides of aproduct string
    // includes() returns true if a string contains a specified string(filterString).
    // includes() is case sensitive.

    value.forEach((a: any) => {
      if (
        a[propName].trim().toLowerCase().includes(filterString.toLowerCase())
      ) {
        result.push(a);
      }
    });
    return result;
  }
}
