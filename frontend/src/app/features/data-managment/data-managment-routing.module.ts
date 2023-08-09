import { RouterModule, Routes } from '@angular/router';
import { DataManagmentComponent } from './data-managment.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: DataManagmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataManagmentRoutingModule {}