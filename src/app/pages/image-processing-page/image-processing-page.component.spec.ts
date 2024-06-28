import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProcessingPageComponent } from './image-processing-page.component';

describe('ImageProcessingPageComponent', () => {
  let component: ImageProcessingPageComponent;
  let fixture: ComponentFixture<ImageProcessingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageProcessingPageComponent]
    });
    fixture = TestBed.createComponent(ImageProcessingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
