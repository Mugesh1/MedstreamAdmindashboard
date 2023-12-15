import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCasesListComponent } from './all-cases-list/all-cases-list.component';
import { AllCasesComponent } from './all-cases.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { AddAllCasesComponent } from './add-all-cases/add-all-cases.component';

const routes: Routes = [
  {
  path: '',
  component: AllCasesComponent,
  children: [
    { path: 'list', component: AllCasesListComponent },
    { path: 'add', component: AddAllCasesComponent },
  ]
}
];


@NgModule({
  declarations: [
    AllCasesListComponent,AllCasesComponent, AddAllCasesComponent
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, RouterModule.forChild(routes)],

})
export class AllCasesModule { }
