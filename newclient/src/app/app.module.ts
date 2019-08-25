import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather';
import { HttpClientModule } from '@angular/common/http';
import { InspirationComponent } from './inspiration';
import { DailyImage } from './dailyImage.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    InspirationComponent,
    DailyImage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
