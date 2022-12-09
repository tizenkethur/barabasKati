import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { NgModule } from '@angular/core';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
  declarations: [ContactsComponent],
  imports: [CommonModule, ContactsRoutingModule],
})
export class ContactsModule {}
