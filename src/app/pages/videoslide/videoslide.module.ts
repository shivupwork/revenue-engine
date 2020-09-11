import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoslidePageRoutingModule } from './videoslide-routing.module';

import { VideoslidePage } from './videoslide.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoslidePageRoutingModule
  ],
  declarations: [VideoslidePage],

})
export class VideoslidePageModule {}
