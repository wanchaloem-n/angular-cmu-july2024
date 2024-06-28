import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-image-processing-waiting-content',
  templateUrl: './image-processing-waiting-content.component.html',
  styleUrls: ['./image-processing-waiting-content.component.css'],
})
export class ImageProcessingWaitingContentComponent {
  previewImage: any =
    'assets/images/pexels-photo-2121640.jpeg';
  outputImage: any =
    'assets/images/pexels-photo-2121640.jpeg';
  myForm!: FormGroup;
  file: File | null = null;
  percent: any = 0;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService
  ) {}
  private updateSubscription!: Subscription;

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      file: [null, Validators.required],
      param: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        // Set the base64 representation of the selected file to previewImage
        this.previewImage = e.target.result;

        // Set the form control value
        this.myForm.get('image')?.setValue(this.previewImage);
      };

      // Read the selected file as a data URL (base64)
      reader.readAsDataURL(file);
    }
  }

  submitdata() {
    console.log(this.myForm.value);
    this.startProcess();
    this.appService.sendData(this.myForm.value).subscribe(
      (response) => {
        console.log('API Response:', response);
        this.outputImage = response.image;
      },
      (error) => {
        // Handle errors here
        console.error('Error sending data to API:', error);
      }
    );
  }

  progress = 0;
  result: string = '';

  startProcess() {
    // Unsubscribe from any existing subscription before starting a new one
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }

    this.appService.startProcess().subscribe(
      () => {
        this.updateSubscription = interval(1000).subscribe(
          () => {
            this.appService.getProgress().subscribe(
              (response) => {
                this.progress = response.progress;
                console.log('Current Progress:', this.progress);

                if (this.progress >= 100) {
                  console.log('Progress reached 100, stopping polling.');
                  this.updateSubscription.unsubscribe();
                  // this.getResult();
                }
              },
              (error) => {
                console.error('Error fetching progress:', error);
              }
            );
          },
          (error) => {
            console.error('Error with polling interval:', error);
          }
        );
      },
      (error) => {
        console.error('Error starting the process:', error);
      }
    );
  }
}
