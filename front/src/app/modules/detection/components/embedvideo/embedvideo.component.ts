import { Component, Input, OnInit, ElementRef, ChangeDetectorRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-embedvideo',
  templateUrl: './embedvideo.component.html',
  styleUrls: ['./embedvideo.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class EmbedvideoComponent implements OnInit, AfterViewInit {
  @Input() source: string = '';
  public dataVideo$ = this.sharedSevice.people$;
  public width!: string;
  public height!: string;
  constructor(private el:ElementRef, private cd:ChangeDetectorRef, private sharedSevice:SharedService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.calcSize();
  }

  private calcSize(): void {
    const element: HTMLElement = this.el.nativeElement.parentElement;
    const dimentions = element.getBoundingClientRect();
    this.width = `${dimentions.width}px`;    
    this.height = `${(dimentions.width * 9) / 16}px`;
    this.cd.detectChanges();
  }
}
