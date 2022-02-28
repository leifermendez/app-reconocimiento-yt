import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAiComponent } from './img-ai.component';

describe('ImgAiComponent', () => {
  let component: ImgAiComponent;
  let fixture: ComponentFixture<ImgAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgAiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
