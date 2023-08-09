import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DataManagmentComponent } from './features/data-managment/data-managment.component';

@NgModule({
  declarations: [AppComponent, DataManagmentComponent],
  
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
})
export class AppModule {}
