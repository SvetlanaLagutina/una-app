import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'first100'
})
export class First100Pipe implements PipeTransform {
    transform(value: string, limit = 101, ellipsis = '...') {
        return value.length > limit ? value.slice(0, limit) + ellipsis : value;
    }
}