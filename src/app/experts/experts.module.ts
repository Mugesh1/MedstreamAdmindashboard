import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertsListComponent } from './experts-list/experts-list.component';
import { ExpertsComponent } from './experts.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ExpertsAddComponent } from './experts-add/experts-add.component';

const routes: Routes = [
  {
  path: '',
  component: ExpertsComponent,
  children: [
    { path: 'list', component: ExpertsListComponent },
    { path: 'add', component: ExpertsAddComponent },
  ]
}
];
@NgModule({
  declarations: [
    ExpertsListComponent,ExpertsComponent, ExpertsAddComponent
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, RouterModule.forChild(routes)],

})
export class ExpertsModule { }
