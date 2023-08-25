import { Component } from '@angular/core';
import {
  CellClickEventArgs,
  EventSettingsModel,
  MoreEventsClickArgs,
  PopupOpenEventArgs,
  View,
} from '@syncfusion/ej2-angular-schedule';
import { L10n, loadCldr } from '@syncfusion/ej2-base';
import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import * as hungarian from 'cldr-data/main/hu/ca-gregorian.json';
import * as numbers from 'cldr-data/main/hu/numbers.json';
import * as timeZoneNames from 'cldr-data/main/hu/timeZoneNames.json';

loadCldr(
  numberingSystems['default'],
  hungarian['default'],
  numbers['default'],
  timeZoneNames['default']
);
L10n.load({
  hu: {
    schedule: {
      day: 'NAP',
      week: 'HÉT',
      workWeek: 'MUNKANAPOK',
      month: 'HÓNAP',
      today: 'MA',
    },
    calendar: {
      today: 'MA',
    },
  },
});
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  //TODO: set the buttons --> don't let anyone to edit or delete the event
  //TODO: add the facebook link to the event
  newViewMode: View = 'Agenda';
  dateFormat: string = 'yyyy.MM.dd';
  weekFirstDay: number = 1;
  eventData: EventSettingsModel = {
    dataSource: [
      {
        Id: 1,
        Subject:
          'Access Bars csere-bere: https://www.facebook.com/events/294856229886030',
        StartTime: new Date('2023-08-12T14:00:00'),
        EndTime: new Date('2023-08-12T20:00:00'),
        description: 'Katt a linkre!',
      },
      {
        Id: 2,
        Subject: 'Access Facelift Tanfolyam',
        StartTime: new Date('2023-08-08T14:00:00'),
        EndTime: new Date('2023-08-08T20:00:00'),
      },
    ],
  };

  onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type === 'Editor' || args.type === 'DeleteAlert') {
      args.cancel = true;
    }
  }

  onCellDoubleClick(args: CellClickEventArgs): void {
    args.cancel = true;
  }
}
