import { Component, OnInit } from '@angular/core';
import { Ioffer } from '../../../entities/offer';
import { OfferService } from '../../../services/offer.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Ifitter } from '../../../entities/fitter';
import { Iservice } from '../../../entities/service';
import { FitterService } from '../../../services/fitter.service';
import { ClientService } from '../../../services/client.service';
import { Iclient } from '../../../entities/client';


@Component({
  templateUrl: './homeFitter.component.html',
  styleUrls: ['./homeFitter.component.css']
})
export class HomeFitterComponent implements OnInit {

  servicos: Iservice[];
  ofertas: Ioffer[];
  loading = true;
  loadingserv = true;
  private currentUser: Ifitter;
  private ofertaServico: Ioffer;
  private client: Iclient;
private modal : any;


  constructor(
    private offerService: OfferService,
    private fitterservice: FitterService,
    private clientService : ClientService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loading = this.carregarTabelas();
  }
  private carregarTabelas(): boolean {
    let load = true;
    this.offerService.getList(this.currentUser.id)
      .subscribe(offers => {
        this.ofertas = offers;
        this.loading = false;
      });

    this.fitterservice.getServico(this.currentUser.id)
      .subscribe(currentServico => {
        this.servicos = currentServico;
        this.loadingserv = false;
      });
    return load;
  }

  

  SelecionaOferta(oferta: Ioffer, modal) {
    this.ofertaServico = oferta;
    this.clientService.get(this.ofertaServico.clientId).subscribe( cliente => {
        this.client = cliente;
    });
    modal.open();
    
  }
}
