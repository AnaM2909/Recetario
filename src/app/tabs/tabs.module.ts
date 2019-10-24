import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
// import { ImagenModalPageModule } from '../imagen-modal/imagen-modal.module';

@NgModule({
  imports:
    [
      IonicModule,
      CommonModule,
      FormsModule,
  //    ImagenModalPageModule,
      TabsPageRoutingModule
    ],
  declarations:
    [
      TabsPage
    ]
})
export class TabsPageModule {}
