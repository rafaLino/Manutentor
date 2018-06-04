import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ifitter } from '../../../entities/fitter';
import { FitterService } from '../../../services/fitter.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tabela-fitter',
  templateUrl: './tabela-fitter.component.html',
  styleUrls: ['./tabela-fitter.component.css']
})
export class TabelaFitterComponent implements OnInit {
  fitterList: Ifitter[];
  loading = true;
  @Output() formEvent = new EventEmitter<number>();

  constructor(
    private svcFitter: FitterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.svcFitter.getList()
      .subscribe(fitters => {
        this.fitterList = fitters;
        this.loading = false;
      });

  }

  changeList(id: number) {
    this.loading = true;
    this.svcFitter.getByServiceType(id)
      .subscribe(fitters => {
        this.fitterList = fitters;
        this.loading = false;
      });

  }



  seleciona(fitter: Ifitter) {
    if (!fitter.availability)
      alert("Manutentor Indisponível");
    else
      this.formEvent.emit(fitter.id);

  }


  onRatingClicked(message: string): void {
    console.log(message);
  }


}
