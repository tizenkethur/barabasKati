import { NgModule } from '@angular/core';
import { EventsComponent } from './events.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  declarations: [EventsComponent],
  imports: [EventsRoutingModule, SharedModule],
})
export class EventsModule {}
