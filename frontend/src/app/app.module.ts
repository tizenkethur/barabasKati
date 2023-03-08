import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AccessConscComponent } from './features/access-consc/access-consc.component';
import { DatepickerComponent } from './features/datepicker/datepicker.component';

@NgModule({
  declarations: [AppComponent, DatepickerComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
})
export class AppModule {}
