import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Course12Page } from './course12.page';

const routes: Routes = [
  {
    path: '',
    component: Course12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Course12PageRoutingModule {}
