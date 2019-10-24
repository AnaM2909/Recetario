import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ImagenModalPage } from '../imagen-modal/imagen-modal.page';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor(public modalCtrl: ModalController) { }
  Imangenes = [
    'assets/PlatosS/Asado Negro.jpg',
    'assets/PlatosS/Empanada.jpg',
    'assets/PlatosS/Ensalada.jpg',
    'assets/PlatosS/Hallaca.jpg',
    'assets/PlatosS/Pabellon.jpg',
    'assets/PlatosS/pescado.jpg',
    'assets/PlatosS/Sopa.jpg',
    'assets/PlatosS/Cachapa.jpg',
  ];
  VerImagen(imagenes) {
   {
     this.modalCtrl.create({
      component : ImagenModalPage
     }).then(modal => modal.present());
   // this.modalCtrl.create({
   //   component : ImagenModalPage,
     /* componentProps : {
        imagen : imagenes,
        text : 'probando',
      } */
   // }).then(modal => modal.present());
    }
  }
  ngOnInit() {
  }
}
