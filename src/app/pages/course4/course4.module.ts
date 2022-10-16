import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Course4PageRoutingModule } from './course4-routing.module';

import { Course4Page } from './course4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Course4PageRoutingModule
  ],
  declarations: [Course4Page]
})
export class Course4PageModule {}
