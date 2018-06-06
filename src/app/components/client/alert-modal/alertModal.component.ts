import { Component, Input } from "@angular/core";
import { MzBaseModal, MzModalComponent } from "ng2-materialize";
import { Iservice } from "../../../entities/service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Status } from "../../shared/status.enum";
import { ServiceService } from "../../../services/service.service";
import { FitterService } from "../../../services/fitter.service";

@Component({
    templateUrl: './alertModal.component.html',
    styleUrls: ['./alertModal.component.css']
    
})
export class AlertModalComponent extends MzBaseModal{
    @Input() dataBiding: any;
    servicos: Iservice[];
    private active = true;
    private serviceForm: FormGroup;
    private currentService: Iservice;
    private loading: boolean;
   
    constructor(
        private fbuilder: FormBuilder,
        private srvService: ServiceService,
        private svcFitter: FitterService
    ){
        super();
    }
    ngOnInit(): void {
     this.servicos = this.dataBiding;
     
    }

    public seleciona(service :Iservice ){
            this.active = false;
            this.currentService = service;
            
    }

    public voltar(){
        this.active = true;
    }

    private confirmar(){
        let id: number, serviceData: string;
        id = this.currentService.id;
        this.currentService.status = Status.Executando;
        this.currentService.serviceTypeId = this.currentService.offer.sType;
        
        serviceData = JSON.stringify(this.currentService);
        this.loading = true;
        this.srvService.confirm(id, serviceData).subscribe(res => {
            this.loading = false;
        });

    }
}