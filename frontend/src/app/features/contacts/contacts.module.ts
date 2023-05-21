import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { NgModule } from '@angular/core';
import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ContactsComponent],
  imports: [CommonModule, ContactsRoutingModule, SharedModule],
})
export class ContactsModule {}
