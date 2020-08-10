import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
