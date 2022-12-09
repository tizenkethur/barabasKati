import { CommonModule } from '@angular/common';
import { AccessConscComponent } from './access-consc.component';
import { NgModule } from '@angular/core';
import { AccessConscRoutingModule } from './access-consc-routing.module';

@NgModule({
  declarations: [AccessConscComponent],
  imports: [CommonModule, AccessConscRoutingModule]
})
export class AccessConscModule {}