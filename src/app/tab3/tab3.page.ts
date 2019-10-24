import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor() { }
  Imangenes = [
    'assets/Pasapalos/Buñuelos.jpg',
    'assets/Pasapalos/Cachito.jpg',
    'assets/Pasapalos/pasapalos.jpg',
    'assets/Pasapalos/Tequeno.jpg',
      // tslint:disable-next-line:semicolon
  ]
  ngOnInit() {
  }

}
