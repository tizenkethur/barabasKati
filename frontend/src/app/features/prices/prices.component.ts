import { Component } from '@angular/core';
import { PriceViewModel } from 'src/app/shared/models/PriceViewModel';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
})
export class PricesComponent {
  prices: PriceViewModel[] = [
    {
      description: 'Access Bars®',
      timeInterval: '60 perc',
      price: '15 000 Ft',
    },
    {
      description: 'Access Facelift®',
      timeInterval: '60 perc',
      price: '15 000 Ft',
    },
    {
      description: 'Gyerek kezelés',
      timeInterval: '60 perc',
      price: '7000 Ft',
    },
    {
      description: 'Felnőtt bérlet',
      timeInterval: '5 alkalom',
      price: '65 000 Ft',
    },
    {
      description: 'Felnőtt bérlet',
      timeInterval: '10 alkalom',
      price: '140 000 Ft',
    },
  ];
  displayedColumns: string[] = ['description', 'timeInterval', 'price'];
}
