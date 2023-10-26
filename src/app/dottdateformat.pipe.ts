import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'dottdateformat'
})
export class DottDateFormat implements PipeTransform {
    transform(value: string, args?: any) {
        return value.replace(/\//g, '.').slice(0, -9);
    }
}