import { Component, OnInit } from '@angular/core';
import { Ifitter } from '../../../entities/fitter';
import { FitterService } from '../../../services/fitter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabela-fitter',
  templateUrl: './tabela-fitter.component.html',
  styleUrls: ['./tabela-fitter.component.css']
})
export class TabelaFitterComponent implements OnInit {
  fitterList: Ifitter[];

  constructor(private svcFitter: FitterService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.fitterList = this.route.snapshot.data['fitter']
  }

}
