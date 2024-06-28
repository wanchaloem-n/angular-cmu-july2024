import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {


  private apiUrl = 'http://localhost:5000'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // Send data to the API
  sendData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/flip-image`, data);
  }

  startProcess(): Observable<any> {
    return this.http.get(`${this.apiUrl}/start-process`);
  }

  getProgress(): Observable<any> {
    return this.http.get(`${this.apiUrl}/progress`);
  }

  getResult(): Observable<any> {
    return this.http.get(`${this.apiUrl}/result`);
  }


}
