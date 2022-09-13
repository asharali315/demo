import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
// import { MatSelectSearchModule } from 'mat-select-search';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatTabsModule } from '@angular/material/tabs';

import {MatTooltipModule} from '@angular/material/tooltip';

const UiComponents = [
  LayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  DragDropModule,
  MatCheckboxModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatTabsModule,
  MatTooltipModule
  // MatSelectSearchModule
];

@NgModule({
  declarations: [],
  imports:UiComponents,
  exports:UiComponents,
})
export class MaterialUiModule { }
