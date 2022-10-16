import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Course7Page } from './course7.page';

const routes: Routes = [
  {
    path: '',
    component: Course7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Course7PageRoutingModule {}
