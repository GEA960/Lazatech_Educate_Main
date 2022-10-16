import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Course6Page } from './course6.page';

const routes: Routes = [
  {
    path: '',
    component: Course6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Course6PageRoutingModule {}
