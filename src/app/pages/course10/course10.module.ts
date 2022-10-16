import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Course10PageRoutingModule } from './course10-routing.module';

import { Course10Page } from './course10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Course10PageRoutingModule
  ],
  declarations: [Course10Page]
})
export class Course10PageModule {}
