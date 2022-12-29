import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countname'
})
export class CountnamePipe implements PipeTransform {

  transform(value: string):number {
    return value.split('').length;
  }

}
