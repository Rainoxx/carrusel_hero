import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UltraInstintoPage } from './ultra-instinto.page';

const routes: Routes = [
  {
    path: '',
    component: UltraInstintoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UltraInstintoPageRoutingModule {}
