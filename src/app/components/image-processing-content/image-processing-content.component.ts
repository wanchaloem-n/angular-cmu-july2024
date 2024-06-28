import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-image-processing-content',
  templateUrl: './image-processing-content.component.html',
  styleUrls: ['./image-processing-content.component.css']
})
export class ImageProcessingContentComponent {
  previewImage: any = 'assets/images/pexels-photo-2121640.jpeg';
  outputImage: any = "assets/images/pexels-photo-2121640.jpeg";
  myForm!: FormGroup;
  file: File | null = null;
  percent:any = 0
  

  constructor(private formBuilder: FormBuilder,
    private appService: AppService,
    ) {}


  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      file: [null, Validators.required],
      param: ['', Validators.required],
      image:['', Validators.required]
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
  
  submitdata(){
    console.log(this.myForm.value)
    this.appService.sendData(this.myForm.value).subscribe(
      response => {
        console.log('API Response:', response);
        this.outputImage = response.image
      },
      error => {
        // Handle errors here
        console.error('Error sending data to API:', error);
      }
    );
  }
 

}
