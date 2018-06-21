import { Component, OnInit } from '@angular/core';
import { TypeServiceService } from '../../services/type-service.service';
import { ClientService } from '../../services/client.service';
import { FitterService } from '../../services/fitter.service';
import { FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { IserviceType } from '../../entities/iservice-type';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  private form: FormGroup;
  private toggleManutentor = false;
  private array = this.fb.array([]);
  private Key = {};
  private typeServices: IserviceType[];
  private loading: boolean;
  constructor(
    private fb: FormBuilder,
    private typeserviceService: TypeServiceService,
    private clientService: ClientService,
    private fitterService: FitterService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      Name: '',
      Email: '',
      Password: '',
      Cpf: '',
      Genre: '',
      Cellphone: '',
      Birthdate: '',
      Address: '',
      Number: '',
      Region: '',
      City: '',
      State: '',
      Cep: '',
      FitterService: this.Key
    });

    this.typeserviceService.getList()
      .subscribe(res => {
        this.typeServices = res;
      })
  }

  save(): void {
    if (this.toggleManutentor) {
      this.Key = {
        "Key": this.array.value
      }
      this.form.patchValue({
        FitterService: this.Key
      });
      this.CadastraManutentor();
    }
    else {
      this.CadastraCliente();
    }
  }

  queroSerManutentor($event): void {
    this.toggleManutentor = !this.toggleManutentor;
  }

  CadastraManutentor() {
    this.loading = true;
    let data = JSON.stringify(this.form.value);
    this.fitterService.post(data)
    .subscribe( () => {
      this.loading = false;
    });

  }
  CadastraCliente() {
    this.loading = true;
    let data = JSON.stringify(this.form.value);
    console.log(data);
    this.clientService.post(data)
      .subscribe(() => {
        this.loading = false;
      });
  }

  onCheck($event: any) {
    var value = $event.target.value;
    let ky = { "ServiceId": value };
    if ($event.target.checked) {
      this.array.push(new FormControl(ky));

    } else {

      this.array.controls.forEach((element, index) => {
        if (element.value.ServiceId == value) {
          this.array.removeAt(index);
          return;
        }
      });
    }
  }

}
