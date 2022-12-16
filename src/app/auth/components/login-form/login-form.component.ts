import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm: FormGroup = new FormGroup({
    login: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, this.passwordValidator]),
  });

  constructor(private readonly authService: AuthService) {}

  submit(): void {
    const login: string = this.loginForm.value.login;
    this.authService.toLogInUser(login);
  }

  passwordValidator(control: FormControl): { [s: string]: string } | null {
    if (control.value.length < 8) {
      return { error: 'at least 8 characters' };
    } else if (!(control.value.match(/[A-Z]/g) && control.value.match(/[a-z]/g))) {
      return { error: 'a mixture of both uppercase and lowercase letters' };
    } else if (!(control.value.match(/[[a-zA-Z]/g) && control.value.match(/[[0-9]/g))) {
      return { error: 'a mixture of letters and numbers' };
    } else if (!control.value.match(/[!@#?$%^&*]/g)) {
      return { error: 'inclusion of at least one special character' };
    }
    return null;
  }
}
