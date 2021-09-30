import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefreshedPageRoutingModule } from './refreshed-routing.module';

import { RefreshedPage } from './refreshed.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefreshedPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RefreshedPage]
})
export class RefreshedPageModule {}
