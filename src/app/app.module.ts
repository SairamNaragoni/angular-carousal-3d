import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomCarousalComponent } from './custom-carousal/custom-carousal.component';
import { CarousalTwoComponent } from './carousal-two/carousal-two.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomCarousalComponent,
    CarousalTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
