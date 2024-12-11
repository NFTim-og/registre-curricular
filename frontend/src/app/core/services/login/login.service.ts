import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SdALoginService {
  private apiUrl = 'http://localhost:3000/api/v1/login'; 

  constructor(private http: HttpClient) {}

  login(user: string, password: string): Observable<any> {
    const loginData = { user, password };
    console.log("ha arribat al servei", loginData);
    return this.http.post<any>(this.apiUrl, loginData);
  }
}
