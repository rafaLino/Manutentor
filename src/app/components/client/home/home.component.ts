import { Component, OnInit } from '@angular/core';
import { IserviceType } from '../../../entities/iservice-type';
import { Ifitter } from '../../../entities/fitter';
import { FitterService } from '../../../services/fitter.service';
import { ClientService } from '../../../services/client.service';
import { TypeServiceService } from '../../../services/type-service.service';
import { Iclient } from '../../../entities/client';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 typeServices: IserviceType[];
 fitterList: Ifitter[];
 currentUser: Iclient;

  constructor(
    private svcFitter: FitterService,
    private svcClient: ClientService,
    private svcTypeService: TypeServiceService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.svcTypeService.getList()
    .subscribe( types => {
     this.typeServices = types;
    });

    this.svcFitter.getList()
    .subscribe(fitters => {
      this.fitterList = fitters;
    });
  }
}
