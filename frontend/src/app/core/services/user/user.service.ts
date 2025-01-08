import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedInSubject.asObservable();

  private usernameSubject = new BehaviorSubject<string | null>(null);
  username$ = this.usernameSubject.asObservable();

  constructor(private http: HttpClient) {}

  setUsername(username: string) {
    this.loggedInSubject.next(true);
    this.usernameSubject.next(username);
  }

  clearUsername() {
    this.loggedInSubject.next(false);
    this.usernameSubject.next(null);
    localStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    return this.loggedInSubject.value;
  }

  logout(): Observable<any> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      return of(null);
    }

    return this.http.post('/api/logout', {}, {
      headers: { Authorization: `Bearer ${token}` },
    }).pipe(
      catchError((err) => {
        console.error('Logout error:', err);
        return of(null);
      })
    );
  }
}
