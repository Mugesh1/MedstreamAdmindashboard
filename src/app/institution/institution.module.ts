import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionListComponent } from './institution-list/institution-list.component';
import { InstitutionComponent } from './institution.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { InstitutionAddComponent } from './institution-add/institution-add.component';

const routes: Routes = [
  {
  path: '',
  component: InstitutionComponent,
  children: [
    { path: 'list', component: InstitutionListComponent },
    { path: 'add', component: InstitutionAddComponent },
  ]
}
];


@NgModule({
  declarations: [
    InstitutionListComponent,InstitutionComponent, InstitutionAddComponent
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, RouterModule.forChild(routes)],

})
export class InstitutionModule { }
