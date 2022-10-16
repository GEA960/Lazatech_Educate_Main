import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Course2Page } from './course2.page';

const routes: Routes = [
  {
    path: '',
    component: Course2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Course2PageRoutingModule {}
