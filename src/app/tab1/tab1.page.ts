import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor() { }
  Imangenes = [
    'assets/PlatosS/Asado Negro.jpg',
    'assets/PlatosS/Empanada.jpg',
    'assets/PlatosS/Ensalada.jpg',
    'assets/PlatosS/Hallaca.jpg',
    'assets/PlatosS/Pabellon.jpg',
    'assets/PlatosS/pescado.jpg',
    'assets/PlatosS/Sopa.jpg',
    'assets/PlatosS/Cachapa.jpg',
  // tslint:disable-next-line:semicolon
  ]

  ngOnInit() {
  }

}
