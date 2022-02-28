import { SharedService } from './../../services/shared.service';
import { BehaviorSubject } from 'rxjs';
import { FaceDetectionService } from './../../services/face-detection.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-img-ai',
  templateUrl: './img-ai.component.html',
  styleUrls: ['./img-ai.component.css'],
})
export class ImgAiComponent implements OnInit {
  @ViewChild('videoRef', { static: true })
  videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('image') imageElement!: ElementRef<HTMLImageElement>;
  stream: MediaStream | null = null;
  currentStream!: MediaStream;
  dimensionVideo: any;
  modelsReady: any = null;
  blobImage!: Blob;
  private _labels$ = new BehaviorSubject<any>('');
  public labels$ = this._labels$.asObservable();

  private _loading$ = new BehaviorSubject<boolean>(false);
  public loading$ = this._loading$.asObservable();

  constructor(
    private faceDetectionService: FaceDetectionService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.faceDetectionService.models$.subscribe((res) => {
      this.modelsReady = res;
    });
  }

  getFile($event: any): void {
    const [file] = $event.target.files;
    const convertImage: any = this.faceDetectionService.blobFile(file);
    this.blobImage = convertImage.image;
  }

  callPerson(person: string): void {
    this.sharedService.getPerson(person).subscribe((res) =>{
      this.sharedService.setPeople(res)
    });
  }

  analyze(): void {
    this._loading$.next(true);
    const model = this.modelsReady;
    const image = this.imageElement.nativeElement;
    model.detect(image).then((labels: any) => {
      console.log({labels})
      const [single] = labels;
      this._loading$.next(false);

      if(single?.label){
        this._labels$.next(single.label);
        this.callPerson(single.label)
      }

      if(!single?.label){
        console.log(single)
        this._labels$.next('NO IDENTIFICADO');
        this.sharedService.setPeople(null)
      }
     
    });
  }
}
