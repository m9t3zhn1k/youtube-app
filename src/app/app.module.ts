import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found.component';

import { CoreModule } from './core/core.module';

import { AuthGuard } from './core/guards/auth.guard';

import { SearchInterceptor } from './shared/interceptors/searchInterceptor';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YouTubeModule),
    canActivate: [AuthGuard],
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), CoreModule, HttpClientModule],
  declarations: [AppComponent, HeaderComponent, NotFoundPageComponent],
  providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: SearchInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
