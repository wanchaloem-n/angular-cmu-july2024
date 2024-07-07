import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProcessingComponent } from './image-processing.component';

describe('ImageProcessingComponent', () => {
  let component: ImageProcessingComponent;
  let fixture: ComponentFixture<ImageProcessingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageProcessingComponent]
    });
    fixture = TestBed.createComponent(ImageProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
