import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/features/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'kapcsolat',
    loadChildren: () =>
      import('../app/features/contacts/contacts.module').then(
        (m) => m.ContactsModule
      ),
  },
  {
    path: 'access-consciousness',
    loadChildren: () =>
      import('../app/features/access-consc/access-consc.module').then(
        (m) => m.AccessConscModule
      ),
  },
  {
    path: 'idopontfoglalas',
    loadChildren: () =>
      import('../app/features/datepicker/datepicker.module').then(
        (m) => m.DatepickerModule
      ),
  },
  {
    path: 'arak',
    loadChildren: () =>
      import('../app/features/prices/prices.module').then(
        (m) => m.PricesModule
      ),
  },
  {
    path: 'esemenyek',
    loadChildren: () =>
      import('../app/features/events/events.module').then(
        (m) => m.EventsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
