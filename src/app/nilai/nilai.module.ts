import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NilaiPageRoutingModule } from './nilai-routing.module';

import { NilaiPage } from './nilai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NilaiPageRoutingModule
  ],
  declarations: [NilaiPage]
})
export class NilaiPageModule {}
