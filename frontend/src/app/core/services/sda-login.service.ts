import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SdALoginService {
  private apiUrl = 'http://localhost:3000/api/login'; 

  constructor(private http: HttpClient) {}

  login(user: string, password: string): Observable<any> {
    const loginData = { user, password };
    return this.http.post<any>(this.apiUrl, loginData);
  }
}
