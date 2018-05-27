import { IserviceType } from "./iservice-type";
import { Ioffer } from "./offer";

export interface Iservice {
id: number;
serviceType: string;
approximateTime: string;
status: number;
clientId: number;
offer: Ioffer;
offerId: number;
value: number;
comments: string;

address: string;
number: string;
region: string;
city: string;
cep: string;
state: string;

}

