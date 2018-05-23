import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
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
import { MzValidationModule } from 'ng2-materialize';
import { TabelaFitterComponent } from '../tabela-fitter/tabela-fitter.component';



@Component({
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(TabelaFitterComponent) tabela: TabelaFitterComponent;

  typeServices: IserviceType[];
  currentUser: Iclient;
  form: FormGroup;
  fitterId: number;
  minhacasa = true;
  TypeId: number;



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
      Address: '',
      Number: '',
      Region: '',
      City: '',
      CEP: '',
      State: ''

    });

    this.svcTypeService.getList()
      .subscribe(types => {
        this.typeServices = types;
      });

  }

  Send(): void {
    if (this.minhacasa)
      this.preencheEndereco();

    const data = JSON.stringify(this.form.value);
    //this.svcOffer.post(data);
    console.log(data.toString());

  }

  receiveForm($event) {
    this.form.patchValue({ FitterId: $event });

  }

  Mudou($event) {
    if (!$event.target.checked) {
      this.clearEndereco();
    }
    this.minhacasa = $event.target.checked;

  }

  preencheEndereco() {
    this.form.patchValue({
      Address: this.currentUser.address,
      Number: this.currentUser.number,
      Region: this.currentUser.region,
      City: this.currentUser.city,
      CEP: this.currentUser.cep,
      State: this.currentUser.state
    });
  }

  clearEndereco() {
    this.form.patchValue({
      Address: '',
      Number: '',
      Region: '',
      City: '',
      CEP: '',
      State: '',
    });
  }

  onTypeChanged($event: any) {
    $event.preventDefault;
    this.tabela.changeList($event.target.value);

  }

}
