import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { EventModel } from 'src/app/shared/models/EventModel';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  totalAngularPackages: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>(
        'https://data.accentapi.com/feed/162589.json?no_cache=20230706161348'
      )
      .subscribe((data) => {
        console.log(data.total);
        this.totalAngularPackages = data.total;
      });
  }
}
