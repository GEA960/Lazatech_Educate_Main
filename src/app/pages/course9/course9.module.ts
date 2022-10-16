import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Course9PageRoutingModule } from './course9-routing.module';

import { Course9Page } from './course9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Course9PageRoutingModule
  ],
  declarations: [Course9Page]
})
export class Course9PageModule {}
