import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlatformRef } from '@angular/core';
import { AppModule } from './app/app.module';

const platform: PlatformRef = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
