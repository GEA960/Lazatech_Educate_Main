import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Course5PageRoutingModule } from './course5-routing.module';

import { Course5Page } from './course5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Course5PageRoutingModule
  ],
  declarations: [Course5Page]
})
export class Course5PageModule {}
