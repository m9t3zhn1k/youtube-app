import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IUser } from '../../auth/models/user.model';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(): boolean {
    let isAuthorized: IUser | null;
    this.authService.isAuthorized.subscribe((value: IUser | null): void => {
      isAuthorized = value;
    });
    return !!isAuthorized;
  }
}
