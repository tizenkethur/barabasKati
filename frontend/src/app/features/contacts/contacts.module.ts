import { ContactsComponent } from './contacts.component';
import { NgModule } from '@angular/core';
import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ContactsComponent],
  imports: [ContactsRoutingModule, SharedModule],
})
export class ContactsModule {}
