import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Course8PageRoutingModule } from './course8-routing.module';

import { Course8Page } from './course8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Course8PageRoutingModule
  ],
  declarations: [Course8Page]
})
export class Course8PageModule {}
