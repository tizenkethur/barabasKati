import { SharedModule } from './../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [{ path: '', component: ContactsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
