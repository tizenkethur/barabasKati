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
    path: 'kapcsolatok',
    loadChildren: () =>
      import('../app/features/contacts/contacts.module').then(
        (m) => m.ContactsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
