import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Course3PageRoutingModule } from './course3-routing.module';

import { Course3Page } from './course3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Course3PageRoutingModule
  ],
  declarations: [Course3Page]
})
export class Course3PageModule {}
