import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProcessingContentComponent } from './image-processing-content.component';

describe('ImageProcessingContentComponent', () => {
  let component: ImageProcessingContentComponent;
  let fixture: ComponentFixture<ImageProcessingContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageProcessingContentComponent]
    });
    fixture = TestBed.createComponent(ImageProcessingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
