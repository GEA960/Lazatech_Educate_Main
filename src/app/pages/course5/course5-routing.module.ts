import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Course5Page } from './course5.page';

const routes: Routes = [
  {
    path: '',
    component: Course5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Course5PageRoutingModule {}
