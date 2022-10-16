import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Course10Page } from './course10.page';

const routes: Routes = [
  {
    path: '',
    component: Course10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Course10PageRoutingModule {}
