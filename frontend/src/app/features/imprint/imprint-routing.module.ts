import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ImprintComponent } from './imprint.component';

const routes: Routes = [{ path: '', component: ImprintComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImprintRoutingModule {}
