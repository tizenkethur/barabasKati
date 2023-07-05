import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: EventsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
