import { Component, OnInit, Input } from '@angular/core';
import { Iclient } from '../../../entities/client';
import { Ifitter } from '../../../entities/fitter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bind-offer',
  templateUrl: './fitter-list.component.html',
  styleUrls: ['./fitter-list.component.css']
})
export class FitterListComponent implements OnInit {
  @Input() offer; 
  currentUser: Iclient;
  fitterList: Ifitter[];
  
  constructor(
    private route: ActivatedRoute
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
 this.fitterList = this.route.snapshot.data['fitter']
  }

}
