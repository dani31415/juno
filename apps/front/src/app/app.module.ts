import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { LoadingService } from './loading.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,

    AppRouterModule
  ],
  providers: [LoadingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
