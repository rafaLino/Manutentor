import { IserviceType } from "./iservice-type";

export interface Ioffer {
id: number;
clientId: number;
fitter: number;
serviceType: IserviceType;
stype: number;
description: string;
address: string;
number: string;
region: string;
city: string;
cep: string;
state: string;
images: Array<string>;

}

