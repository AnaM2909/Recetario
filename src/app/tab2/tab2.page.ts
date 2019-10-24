import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor() { }
  Imangenes = [
    'assets/Recetario/ArrozL.jpg',
    'assets/Recetario/GalletasM.png',
    'assets/Recetario/GalletasChocolate.jpg',
    'assets/Recetario/GalletasMani.jpg',
    'assets/Recetario/Marmoleada.jpg',
    'assets/Recetario/TortaA.png',
    'assets/Recetario/TortaC1.jpg',
    'assets/Recetario/TortaN.png'
  // tslint:disable-next-line:semicolon
  ]
  ngOnInit() {
  }

}
