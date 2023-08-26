import { NgModule } from '@angular/core';
import { EventsComponent } from './events.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';
import { CommonModule } from '@angular/common';
import {
  ScheduleModule,
  AgendaService,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
} from '@syncfusion/ej2-angular-schedule';
@NgModule({
  declarations: [EventsComponent],
  imports: [EventsRoutingModule, SharedModule, CommonModule, ScheduleModule],
  providers: [
    AgendaService,
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
  ],
})
export class EventsModule {}
