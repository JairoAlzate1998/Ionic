import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefreshedPage } from './refreshed.page';

const routes: Routes = [
  {
    path: '',
    component: RefreshedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefreshedPageRoutingModule {}
