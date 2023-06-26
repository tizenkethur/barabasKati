import { SharedModule } from 'src/app/shared/shared.module';
import { AccessConscComponent } from './access-consc.component';
import { NgModule } from '@angular/core';
import { AccessConscRoutingModule } from './access-consc-routing.module';

@NgModule({
  declarations: [AccessConscComponent],
  imports: [AccessConscRoutingModule, SharedModule],
})
export class AccessConscModule {}
