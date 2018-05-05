import { Component, OnInit } from '@angular/core';
import { IserviceType } from '../../../entities/iservice-type';
import { Ifitter } from '../../../entities/fitter';
import { FitterService } from '../../../services/fitter.service';
import { ClientService } from '../../../services/client.service';
import { TypeServiceService } from '../../../services/type-service.service';
import { Iclient } from '../../../entities/client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 typeServices: IserviceType[];
 currentUser: Iclient; 
 offerForm: FormGroup;
 

  constructor(
    private svcTypeService: TypeServiceService,
    private fb: FormBuilder,
    private route: Router,
    private activeRoute: ActivatedRoute,

  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  ngOnInit() {

    this.offerForm = this.fb.group({
      ClientId: this.currentUser.id,
      ServiceTypeId: ['', Validators.required],
      Description: ['', Validators.required]
    });

    this.svcTypeService.getList()
    .subscribe( types => {
     this.typeServices = types;     
    });
  }


  Send(): void{
    var servicetype = +this.offerForm.controls['ServiceTypeId'].value;
    
    this.route.navigate(['selecionarmanutentor', servicetype]);
  }
}
