import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeHTMLTags'
})
export class IgnoreHtmlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
