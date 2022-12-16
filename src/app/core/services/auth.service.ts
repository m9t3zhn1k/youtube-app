import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { IUser } from '../../auth/models/user.model';

@Injectable()
export class AuthService {
  user: IUser | null = (JSON.parse(localStorage.getItem('user')) as IUser) ?? null;

  isAuthorized: ReplaySubject<IUser | null> = new ReplaySubject<IUser | null>(1);

  constructor(private router: Router) {
    this.isAuthorized.next(this.user);
  }

  toLogInUser(login: string): void {
    this.user = {
      login,
      token: 'qwerty1337',
      id: '1234567890',
    };
    this.isAuthorized.next(this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
    this.router.navigateByUrl('');
  }

  toLogOut(): void {
    this.user = null;
    localStorage.removeItem('user');
    this.isAuthorized.next(null);
  }
}
