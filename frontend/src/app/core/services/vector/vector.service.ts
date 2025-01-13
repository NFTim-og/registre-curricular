import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VectorService {
  private apiUrl = 'http://localhost:3000/api/v1/vector'; 

  constructor(private http: HttpClient) {}

  getVectorData(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {});
  }
}
