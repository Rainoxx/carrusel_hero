import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinternaVerdePageRoutingModule } from './linterna-verde-routing.module';

import { LinternaVerdePage } from './linterna-verde.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinternaVerdePageRoutingModule
  ],
  declarations: [LinternaVerdePage]
})
export class LinternaVerdePageModule {}
