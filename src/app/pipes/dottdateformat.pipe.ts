import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'dottdateformat'
})
export class DottDateFormat implements PipeTransform {
    transform(value: string): string {
        return value.replace(/\//g, '.').slice(0, -9);
    }
}