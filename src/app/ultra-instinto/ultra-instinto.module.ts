import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UltraInstintoPageRoutingModule } from './ultra-instinto-routing.module';

import { UltraInstintoPage } from './ultra-instinto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UltraInstintoPageRoutingModule
  ],
  declarations: [UltraInstintoPage]
})
export class UltraInstintoPageModule {}
