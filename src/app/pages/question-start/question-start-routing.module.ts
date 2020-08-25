import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionStartPage } from './question-start.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionStartPageRoutingModule {}
