import { DatepickerComponent } from './datepicker.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { DatepickerRoutingModule } from './datepicker-routing.module';

@NgModule({
  declarations: [DatepickerComponent],
  imports: [DatepickerRoutingModule, SharedModule],
})
export class DatepickerModule {}
