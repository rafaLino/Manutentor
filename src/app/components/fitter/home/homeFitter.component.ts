import { Component, OnInit } from '@angular/core';
import { Ioffer } from '../../../entities/offer';
import { OfferService } from '../../../services/offer.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Ifitter } from '../../../entities/fitter';
import { Iservice } from '../../../entities/service';
import { FitterService } from '../../../services/fitter.service';

@Component({
  templateUrl: './homeFitter.component.html',
  styleUrls: ['./homeFitter.component.css']
})
export class HomeFitterComponent implements OnInit {
 
  servicos: Iservice[];
  ofertas: Ioffer[];
  loading = true;
  private currentUser: Ifitter;
  
  constructor(
    private offerService: OfferService,
    private fitterservice: FitterService,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
   this.loading = this.carregarTabelas();
  }


  seleciona(oferta:Ioffer){
    console.log(oferta);
  }

 private carregarTabelas(): boolean{
    let load = true;
    this.offerService.getList()
    .subscribe( offers => {
      this.ofertas = offers;
      load = false;
    });

    this.fitterservice.getServico(this.currentUser.id)
    .subscribe( currentServico => {
      this.servicos = currentServico;
      load = false;
    });
    return load;
  }
}
