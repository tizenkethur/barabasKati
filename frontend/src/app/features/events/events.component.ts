import { L10n, loadCldr } from '@syncfusion/ej2-base';
import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import * as hungarian from 'cldr-data/main/hu/ca-gregorian.json';
import * as numbers from 'cldr-data/main/hu/numbers.json';
import * as timeZoneNames from 'cldr-data/main/hu/timeZoneNames.json';
import { Component } from '@angular/core';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import { events } from 'src/app/features/events/db-data';

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
  newViewMode: View = 'Month';
  dateFormat: string = 'yyyy.MM.dd';
  weekFirstDay: number = 1;

  eventData: EventSettingsModel = {
    dataSource: events,
    fields: {
      subject: { name: 'Subject' },
      description: { name: 'description' },
      location: { name: 'location' },
    },
  };

  onPopupOpen(event): void {
    window.open(event.data.description, '_blank');
  }
}
