import { Component, OnInit } from '@angular/core';
import { Iclient } from '../../../entities/client';
import { Ifitter } from '../../../entities/fitter';
import { ActivatedRoute } from '@angular/router';
import { FitterService } from '../../../services/fitter.service';

@Component({
  selector: 'app-fitter-list',
  templateUrl: './fitter-list.component.html',
  styleUrls: ['./fitter-list.component.css']
})
export class FitterListComponent implements OnInit { 
  currentUser: Iclient;
  fitterList: Ifitter[];
  loading = true;
  
  constructor(
    private route: ActivatedRoute,
    private service: FitterService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
  this.service.getByServiceType(id).subscribe(fitters => {
     this.fitterList = fitters;
     this.loading = false;
  }
 )
}

seleciona(fitter: Ifitter){
  console.log(fitter);
}

}
