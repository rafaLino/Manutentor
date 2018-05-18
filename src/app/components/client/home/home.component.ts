import { Component, OnInit, EventEmitter } from '@angular/core';
import { IserviceType } from '../../../entities/iservice-type';
import { Ifitter } from '../../../entities/fitter';
import { FitterService } from '../../../services/fitter.service';
import { ClientService } from '../../../services/client.service';
import { TypeServiceService } from '../../../services/type-service.service';
import { Iclient } from '../../../entities/client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { OfferService } from '../../../services/offer.service';



@Component({
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 typeServices: IserviceType[];
 currentUser: Iclient; 
 form: FormGroup;
 fitterId: number;


  constructor(
    private svcTypeService: TypeServiceService,
    private svcOffer: OfferService,
    private fb: FormBuilder,
    private route: Router,
    private activeRoute: ActivatedRoute


  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  }
  ngOnInit() {

    this.form = this.fb.group({
      ClientId: this.currentUser.id,
      FitterId: [this.fitterId, Validators.required],
      ServiceTypeId: ['', Validators.required],
      Description: ['', Validators.required],

    });

    this.svcTypeService.getList()
    .subscribe( types => {
     this.typeServices = types;     
    });

  }

  Send(): void{    
    const data = JSON.stringify(this.form.value);
    this.svcOffer.post(data);
    console.log(data.toString());
    
  }

  receiveForm($event){
    this.form.patchValue({FitterId: $event});
    
  }


}
