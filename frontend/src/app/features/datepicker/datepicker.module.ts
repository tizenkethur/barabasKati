import { DatepickerComponent } from './datepicker.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatepickerRoutingModule } from './datepicker-routing.module';

@NgModule({
  declarations: [DatepickerComponent],
  imports: [CommonModule, DatepickerRoutingModule, SharedModule],
})
export class DatepickerModule {}
