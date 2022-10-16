import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Course12PageRoutingModule } from './course12-routing.module';

import { Course12Page } from './course12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Course12PageRoutingModule
  ],
  declarations: [Course12Page]
})
export class Course12PageModule {}
