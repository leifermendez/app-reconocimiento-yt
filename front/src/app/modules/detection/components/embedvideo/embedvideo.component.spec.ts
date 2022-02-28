import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedvideoComponent } from './embedvideo.component';

describe('EmbedvideoComponent', () => {
  let component: EmbedvideoComponent;
  let fixture: ComponentFixture<EmbedvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbedvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
