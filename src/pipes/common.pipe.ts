import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { formatCurrency, formatDate, formatDateTime, formatDateTimeServer, formatPhone, getImageCdn, isEmptyObject } from 'src/utils/utils';


@Pipe({name: 'cdnUrl'})
export class CdnUrlPipe implements PipeTransform {
  transform(value: string): string {
    let newStr: string = getImageCdn(value);
    return newStr;
  }
}

@Pipe({name: 'pageIndex'})
export class PageIndexPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    const pageNumber : any = args[0] || 0;
    const pageSize : any = args[1] || 0;
    const rowNum = (((pageNumber - 1) * pageSize) + value + 1);
    return formatCurrency(rowNum);
  }
}

@Pipe ({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]) : unknown{
    const space : any = args[0] || ' ';
    return formatPhone(value, space);
  }
}

@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {
    return formatDateTime(value);
  }
}
