import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedInSubject.asObservable();

  private usernameSubject = new BehaviorSubject<string | null>(null);
  username$ = this.usernameSubject.asObservable();

  setUsername(username: string) {
    this.loggedInSubject.next(true); // Set logged-in state to true
    this.usernameSubject.next(username);
  }

  clearUsername() {
    this.loggedInSubject.next(false); // Set logged-in state to false
    this.usernameSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.loggedInSubject.value;
  }
}
