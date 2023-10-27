import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'datetimeformat'
})
export class DateTimeFormat implements PipeTransform {
    transform(value: string): string {
        return value.replace(/\//g, '.').slice(0, -3);
    }
}