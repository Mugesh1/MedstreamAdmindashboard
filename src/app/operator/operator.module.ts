import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorAddComponent } from './operator-add/operator-add.component';
import { OperatorListComponent } from './operator-list/operator-list.component';
import { OperatorComponent } from './operator.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';


const routes: Routes = [
  {
    path: '',
    component: OperatorComponent,
    children: [
      { path: 'list', component: OperatorListComponent },
      { path: 'add', component: OperatorAddComponent },

    ]
  }
];


@NgModule({
  declarations: [
    OperatorAddComponent, OperatorListComponent, OperatorComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), MaterialModule, ReactiveFormsModule,
  ]
})
export class OperatorModule { }
