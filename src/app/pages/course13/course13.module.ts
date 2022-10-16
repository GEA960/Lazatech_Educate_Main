import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Course13PageRoutingModule } from './course13-routing.module';

import { Course13Page } from './course13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Course13PageRoutingModule
  ],
  declarations: [Course13Page]
})
export class Course13PageModule {}
