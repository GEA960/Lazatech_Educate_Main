import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Course7PageRoutingModule } from './course7-routing.module';

import { Course7Page } from './course7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Course7PageRoutingModule
  ],
  declarations: [Course7Page]
})
export class Course7PageModule {}
