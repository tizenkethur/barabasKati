import { NgModule } from '@angular/core';
import { EventsComponent } from './events.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [EventsComponent],
  imports: [EventsRoutingModule, SharedModule, CommonModule],
})
export class EventsModule {}
