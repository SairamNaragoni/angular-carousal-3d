import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomCarousalComponent } from './custom-carousal/custom-carousal.component';
import { CarousalTwoComponent } from './carousal-two/carousal-two.component';
import { CarousalItemComponent } from './carousal-item/carousal-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomCarousalComponent,
    CarousalTwoComponent,
    CarousalItemComponent
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
