import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NilaiPage } from './nilai.page';

const routes: Routes = [
  {
    path: '',
    component: NilaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NilaiPageRoutingModule {}
