import { Injectable, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import models from '@cloud-annotations/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FaceDetectionService {
  private _models$ = new BehaviorSubject<any>(null);
  public models$ = this._models$.asObservable();
  private listModels = [
    '/assets/model/model_leifer'
  ]


  constructor(private sanitizer: DomSanitizer) {
    this.loadModels();
  }

  loadModels(): void {

    const queue = this.listModels.map((model) => models.load(model))
    console.log(queue);
        
    Promise.all(queue).then(([modelLoaded]) => {
      console.log('Cargado..', modelLoaded)
      this._models$.next(modelLoaded);
    })
 
  }

  blobFile = ($event: any) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      return {
        blob: $event,
        image,
      };
    } catch (e) {
      return null;
    }
  };
}
