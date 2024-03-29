import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/features/main/main.module').then((m) => m.MainModule),
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
  {
    path: 'adatvedelmi-nyilatkozat',
    loadChildren: () =>
      import('../app/features/data-managment/data-managment.module').then(
        (m) => m.DataManagmentModule
      ),
  },
  {
    path: 'impresszum',
    loadChildren: () =>
      import('../app/features/imprint/imprint.module').then(
        (m) => m.ImprintModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
