import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatTabsModule, MatIconModule],
  exports: [CommonModule, HeaderComponent,MatTabsModule, MatIconModule],
})
export class SharedModule {}
