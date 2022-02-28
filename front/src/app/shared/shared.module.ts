import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CheckProviderPipe } from './pipe/check-provider.pipe';
import { SourceSafePipe } from './pipe/source-safe.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    CheckProviderPipe,
    SourceSafePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    CheckProviderPipe,
    SourceSafePipe
  ]
})
export class SharedModule { }
