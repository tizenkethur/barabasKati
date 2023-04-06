import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [HeaderComponent, ExpansionPanelComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatMenuModule,
    YouTubePlayerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    MatExpansionModule,
    MatToolbarModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    ExpansionPanelComponent,
    MatTabsModule,
    MatIconModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatMenuModule,
    YouTubePlayerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    MatExpansionModule,
    MatToolbarModule,
  ],
})
export class SharedModule {}
