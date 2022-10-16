import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Course9Page } from './course9.page';

const routes: Routes = [
  {
    path: '',
    component: Course9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Course9PageRoutingModule {}
