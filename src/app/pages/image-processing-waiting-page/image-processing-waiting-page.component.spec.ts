import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProcessingWaitingPageComponent } from './image-processing-waiting-page.component';

describe('ImageProcessingWaitingPageComponent', () => {
  let component: ImageProcessingWaitingPageComponent;
  let fixture: ComponentFixture<ImageProcessingWaitingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageProcessingWaitingPageComponent]
    });
    fixture = TestBed.createComponent(ImageProcessingWaitingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
