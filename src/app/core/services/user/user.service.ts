import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  testUser: User = {
    firstName: 'Test',
    lastName: 'User',
    userName: 'testuser2525',
    email: 'testuser2525@test.com',
    imageUrl: 'assets/male_user.png'
  };

  userBS$: BehaviorSubject<User>;

  constructor() { 
    this.userBS$ = new BehaviorSubject<User>(this.testUser);
  }

  getCurrentUser(): Observable<User> {
    return this.userBS$.asObservable();
  }

  setCurrentUser(user: User): void {
    this.userBS$.next(user);
  }

}
