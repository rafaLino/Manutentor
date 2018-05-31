import { IserviceType } from "./iservice-type";
import { Ifitter } from "./fitter";

export interface Ioffer {
id: number;
clientId: number;
fitterId: number;
fitter: Ifitter;
serviceType: IserviceType;
status: number;
sType: number;
description: string;
address: string;
number: string;
region: string;
city: string;
cep: string;
state: string;
images: Array<string>;

}

