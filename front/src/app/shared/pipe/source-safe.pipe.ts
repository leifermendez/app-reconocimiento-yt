import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sourceSafe'
})
export class SourceSafePipe implements PipeTransform {

  constructor(private _sanitizer:DomSanitizer){

  }

  transform(value: string): any {
    try{
      return this._sanitizer.bypassSecurityTrustResourceUrl(value);
    }catch(e){
      return null
    }
  }

}
