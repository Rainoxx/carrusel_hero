import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinternaVerdePage } from './linterna-verde.page';

const routes: Routes = [
  {
    path: '',
    component: LinternaVerdePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinternaVerdePageRoutingModule {}
