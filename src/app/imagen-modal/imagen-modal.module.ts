import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImagenModalPage } from './imagen-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ImagenModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagenModalPage,
    RouterModule.forChild(routes)
  ],
  declarations: [ImagenModalPage]
})
export class ImagenModalPageModule {}
