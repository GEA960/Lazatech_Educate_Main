import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Course11PageRoutingModule } from './course11-routing.module';

import { Course11Page } from './course11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Course11PageRoutingModule
  ],
  declarations: [Course11Page]
})
export class Course11PageModule {}
