import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from './../../shared/shared.module';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentsRootComponent } from './students-root/students-root.component';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsTableComponent } from './students-table/students-table.component';

@NgModule({
  declarations: [
    StudentFormComponent,
    StudentPageComponent,
    StudentsTableComponent,
    StudentsRootComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    SharedModule,
    StudentsRoutingModule,
  ],
  exports: [
    StudentPageComponent,
  ]
})
export class StudentsModule { }
