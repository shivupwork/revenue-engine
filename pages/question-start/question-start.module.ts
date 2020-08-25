import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionStartPageRoutingModule } from './question-start-routing.module';

import { QuestionStartPage } from './question-start.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionStartPageRoutingModule
  ],
  declarations: [QuestionStartPage]
})
export class QuestionStartPageModule {}
