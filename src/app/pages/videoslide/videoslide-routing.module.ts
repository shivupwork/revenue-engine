import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoslidePage } from './videoslide.page';

const routes: Routes = [
  {
    path: '',
    component: VideoslidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoslidePageRoutingModule {}
