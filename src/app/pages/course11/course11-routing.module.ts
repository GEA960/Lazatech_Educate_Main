import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Course11Page } from './course11.page';

const routes: Routes = [
  {
    path: '',
    component: Course11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Course11PageRoutingModule {}
