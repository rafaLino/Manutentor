import { Component, Input } from "@angular/core";
import { MzBaseModal, MzModalComponent, MzModalService } from "ng2-materialize";
import { Iservice } from "../../../entities/service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Status } from "../../shared/status.enum";
import { ServiceService } from "../../../services/service.service";
import { FitterService } from "../../../services/fitter.service";
import { Ifitter } from "../../../entities/fitter";

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
    private currentFitter : Ifitter;
   
    constructor(
        private fbuilder: FormBuilder,
        private srvService: ServiceService,
        private svcFitter: FitterService,
        private fitterService : FitterService
    ){
        super();
    }
    ngOnInit(): void {
     this.servicos = this.dataBiding;
     console.log(this.servicos);
     
    }

    public seleciona(service :Iservice ){
            this.active = false;
            this.currentService = service;
            this.loadFitter(service.fitterId);
            
    }

    public voltar(){
        this.active = true;
    }

    loadFitter(id: number){
        this.fitterService.get(id).subscribe(res => {
            this.currentFitter = res;
        });
    }

    public confirmar(){
        let id: number, serviceData: string;
        id = this.currentService.id;
        this.currentService.status = Status.Executando;
        this.currentService.serviceTypeId = this.currentService.offer.sType;
        
        serviceData = JSON.stringify(this.currentService);
        this.loading = true;
        this.srvService.confirm(id, serviceData).subscribe(res => {
            this.loading = false;
            this.modalComponent.close();
            
        });

    }
}