import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flying'
})
export class FlyingPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return value > 100 ? 100 : value;
  }

}
