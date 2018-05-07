import { Component, OnInit, Input, Output } from '@angular/core';
import { Ifitter } from '../../../entities/fitter';
import { FitterService } from '../../../services/fitter.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-tabela-fitter',
  templateUrl: './tabela-fitter.component.html',
  styleUrls: ['./tabela-fitter.component.css']
})
export class TabelaFitterComponent implements OnInit {
  fitterList: Ifitter[];
  @Input() fitterId: number;
  
  constructor(
  private svcFitter: FitterService,
  private route: ActivatedRoute
) { }

  ngOnInit() {
    this.fitterList = this.route.snapshot.data['fitter']

  }

  seleciona(fitter: Ifitter){
    this.fitterId = fitter.id;
    console.log(fitter.id);
  }
}
