import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/features/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../app/features/authentication/login/login.module').then(
        (m) => m.LoginModule
      ),
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
    path: 'datepicker',
    loadChildren: () =>
      import('../app/features/datepicker/datepicker.module').then(
        (m) => m.DatepickerModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
