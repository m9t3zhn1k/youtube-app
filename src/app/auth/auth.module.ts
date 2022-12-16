import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [{ path: '', component: AuthPageComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule, SharedModule],
  declarations: [AuthPageComponent, LoginFormComponent],
})
export class AuthModule {}
