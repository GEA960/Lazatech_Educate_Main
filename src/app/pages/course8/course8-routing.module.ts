import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Course8Page } from './course8.page';

const routes: Routes = [
  {
    path: '',
    component: Course8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Course8PageRoutingModule {}
