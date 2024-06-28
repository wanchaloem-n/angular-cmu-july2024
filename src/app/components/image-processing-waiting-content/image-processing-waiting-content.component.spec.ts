import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProcessingWaitingContentComponent } from './image-processing-waiting-content.component';

describe('ImageProcessingWaitingContentComponent', () => {
  let component: ImageProcessingWaitingContentComponent;
  let fixture: ComponentFixture<ImageProcessingWaitingContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageProcessingWaitingContentComponent]
    });
    fixture = TestBed.createComponent(ImageProcessingWaitingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
