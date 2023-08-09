import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataManagmentComponent } from './data-managment.component';
import { CommonModule } from '@angular/common';
import { DataManagmentRoutingModule } from './data-managment-routing.module';

@NgModule({
  declarations: [DataManagmentComponent],
  imports: [CommonModule, SharedModule, DataManagmentRoutingModule],
})
export class DataManagmentModule {}
