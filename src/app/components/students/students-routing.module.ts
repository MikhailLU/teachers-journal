import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsTableComponent } from './students-table/students-table.component';

const routes: Routes = [
  {path: 'students', component: StudentsTableComponent},
  {path: 'students/form', component: StudentFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
