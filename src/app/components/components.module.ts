import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreComponent } from '../component/nombre/nombre.component';



@NgModule({
  declarations: [NombreComponent],
  imports: [
    CommonModule
  ],
  exports: [NombreComponent],
})
export class ComponentsModule { }
