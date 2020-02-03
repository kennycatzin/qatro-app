import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'dateFormatPipe'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: any) {
    let datePipe = new DatePipe("en-US");
    let date = value instanceof Date ? value : new Date(value);
    date.setDate(value.getDate() + 1);

    value = datePipe.transform(date, 'dd/MM/yyyy');
    return value;
 }
}
