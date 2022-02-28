import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetectionRoutingModule } from './detection-routing.module';
import { ImgAiComponent } from './components/img-ai/img-ai.component';
import { DetectionPageComponent } from './page/detection-page.component';
import { InfoImageComponent } from './components/info-image/info-image.component';
import { EmbedvideoComponent } from './components/embedvideo/embedvideo.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    ImgAiComponent,
    DetectionPageComponent,
    InfoImageComponent,
    EmbedvideoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DetectionRoutingModule,
    SharedModule
  ]
})
export class DetectionModule { }
