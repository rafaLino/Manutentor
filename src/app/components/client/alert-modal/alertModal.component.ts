import { Component, Input } from "@angular/core";
import { MzBaseModal, MzModalComponent } from "ng2-materialize";
import { Iservice } from "../../../entities/service";

@Component({
    templateUrl: './alertModal.component.html'
})
export class AlertModalComponent extends MzBaseModal{
    @Input() dataBiding: any;
    servicos: Iservice;

    ngOnInit(): void {
     this.servicos = this.dataBiding;
    }
}