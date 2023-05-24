import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PricesComponent } from './prices.component';
import { PricesRoutingModule } from './prices-routing.module';

@NgModule({
  declarations: [PricesComponent],
  imports: [CommonModule, PricesRoutingModule, SharedModule],
})
export class PricesModule {}
