import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Course3Page } from './course3.page';

const routes: Routes = [
  {
    path: '',
    component: Course3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Course3PageRoutingModule {}
