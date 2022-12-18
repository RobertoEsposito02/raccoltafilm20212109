import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistaListComponent } from './regista-list/regista-list.component';
import { RegistaCreateComponent } from './regista-create/regista-create.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

const routes:Routes = [
  {
    path: '',
    component: RegistaListComponent
  },
  {
    path: 'create',
    component: RegistaCreateComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];


@NgModule({
  declarations: [
    RegistaListComponent,
    RegistaCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class RegistaModule { }
