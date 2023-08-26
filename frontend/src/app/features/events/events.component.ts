import { L10n, loadCldr } from '@syncfusion/ej2-base';
import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import * as hungarian from 'cldr-data/main/hu/ca-gregorian.json';
import * as numbers from 'cldr-data/main/hu/numbers.json';
import * as timeZoneNames from 'cldr-data/main/hu/timeZoneNames.json';
import { Component } from '@angular/core';
import {
  CellClickEventArgs,
  EventSettingsModel,
  View,
} from '@syncfusion/ej2-angular-schedule';

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
      noEvents: 'Ma nincs elérhető esemény.',
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
  //TODO: make facebook link as an anchor tag
  newViewMode: View = 'Agenda';
  dateFormat: string = 'yyyy.MM.dd';
  weekFirstDay: number = 1;
  data = [
    {
      Id: 1,
      Subject: 'Access Bars csere-bere',
      StartTime: new Date('2023-08-26T14:00:00'),
      EndTime: new Date('2023-08-26T20:00:00'),
      description: 'https://www.facebook.com/events/294856229886030',
    },
  ];

  eventData: EventSettingsModel = {
    dataSource: this.data,
    fields: {
      subject: { name: 'Subject' },
      description: { name: 'description' },
    },
  };

  onCellDoubleClick(args: CellClickEventArgs): void {
    args.cancel = true;
  }
}
