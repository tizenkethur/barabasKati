import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImprintComponent } from './imprint.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImprintRoutingModule } from './imprint-routing.module';

@NgModule({
  declarations: [ImprintComponent],
  imports: [CommonModule, SharedModule, ImprintRoutingModule],
})
export class ImprintModule {}
