import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Course6PageRoutingModule } from './course6-routing.module';

import { Course6Page } from './course6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Course6PageRoutingModule
  ],
  declarations: [Course6Page]
})
export class Course6PageModule {}
