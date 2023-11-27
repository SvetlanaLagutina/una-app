import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'thousand'
})
export class ThousandPipe implements PipeTransform {
    transform(value: number): string {
        if (isNaN(value)) return '-';
        let classOfNum = 0;
        const prefix = value < 0 ? "-" : "";
        let num = Math.abs(value);
        while (num > 1000) {
            num /= 1000;
            classOfNum++;
        }
        const postfixArr = ["", "K", "M", "G", "T"];
        const len = postfixArr.length;
        if (classOfNum > len - 1) {
            const outLimitClass = classOfNum - len + 1;
            num = num * Math.pow(10, outLimitClass * 3);
            classOfNum = len - 1;
        }
        return prefix + Math.trunc(num) + (postfixArr[classOfNum] || "");
    }
}