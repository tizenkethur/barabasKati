import { Component } from '@angular/core';
import {
  CellClickEventArgs,
  EventSettingsModel,
  MoreEventsClickArgs,
  PopupOpenEventArgs,
  View,
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  //TODO: set the language to hun
  //TODO: set the buttons --> don't let anyone to edit or delete the event
  //TODO: add the facebook link to the event
  newViewMode: View = 'Agenda';
  eventData: EventSettingsModel = {
    dataSource: [
      {
        Id: 1,
        Subject: 'Access Bars csere-bere',
        StartTime: new Date('2023-08-12T14:00:00'),
        EndTime: new Date('2023-08-12T20:00:00'),
      },
      {
        Id: 2,
        Subject: 'Access Facelift Tanfolyam',
        StartTime: new Date('2023-08-08T14:00:00'),
        EndTime: new Date('2023-08-08T20:00:00'),
      },
    ],
  };
}
