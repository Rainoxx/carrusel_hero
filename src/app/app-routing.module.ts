import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ultra-instinto',
    loadChildren: () => import('./ultra-instinto/ultra-instinto.module').then( m => m.UltraInstintoPageModule)
  },
  {
    path: 'linterna-verde',
    loadChildren: () => import('./linterna-verde/linterna-verde.module').then( m => m.LinternaVerdePageModule)
  },
  {
    path: 'superman',
    loadChildren: () => import('./superman/superman.module').then( m => m.SupermanPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
