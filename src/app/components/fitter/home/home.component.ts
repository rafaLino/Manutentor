import { Component, OnInit } from '@angular/core';
import { Ioffer } from '../../../entities/offer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ofertas: Ioffer[];

  constructor() { }

  ngOnInit() {
  }


  seleciona(oferta:Ioffer){
    
  }

}
