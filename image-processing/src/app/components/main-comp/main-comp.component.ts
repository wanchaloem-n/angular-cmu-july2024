import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { PythonApiService } from 'src/app/services/python-api.service';


@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent {
  // previewImage: any = 'assets/images/pexels-photo-2121640.jpeg';
  // outputImage: any = "assets/images/pexels-photo-2121640.jpeg";
    previewImage: any = 'https://images.pexels.com/photos/2121640/pexels-photo-2121640.jpeg?auto=compress&cs=tinysrgb&w=500&dpr=2';
  outputImage: any = "https://images.pexels.com/photos/2121640/pexels-photo-2121640.jpeg?auto=compress&cs=tinysrgb&w=500&dpr=2";

  myForm!: FormGroup;
  file: File | null = null;


  constructor(private formBuilder: FormBuilder,
    private PythonApiService: PythonApiService,
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



    this.PythonApiService.deblurimage(this.myForm.value).subscribe(
      response => {
        console.log('API Response:', response);
        this.outputImage = response.image
      },
      error => {
        // Handle errors here
        console.error('Error sending data to API:', error);
      }
    );


    // this.PythonApiService.sendData(this.myForm.value).subscribe(
    //   response => {
    //     console.log('API Response:', response);
    //     this.outputImage = response.image
    //   },
    //   error => {
    //     // Handle errors here
    //     console.error('Error sending data to API:', error);
    //   }
    // );
}
}
