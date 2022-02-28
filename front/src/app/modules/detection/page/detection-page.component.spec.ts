import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionPageComponent } from './detection-page.component';

describe('DetectionPageComponent', () => {
  let component: DetectionPageComponent;
  let fixture: ComponentFixture<DetectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
