import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Course13Page } from './course13.page';

const routes: Routes = [
  {
    path: '',
    component: Course13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Course13PageRoutingModule {}
