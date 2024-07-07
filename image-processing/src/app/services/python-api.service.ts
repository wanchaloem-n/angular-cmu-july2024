import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PythonApiService {



  private apiUrl = 'http://localhost:5000'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // Send data to the API
  sendData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/flip-image`, data);
  }

  deblurimage(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/deblur-image`, data);
  }


}
