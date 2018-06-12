import { IserviceType } from "./iservice-type";

export interface Ifitter {
  id: number;
  cpf: string;
  name: string;
  genre: string;
  cellPhone: string;
  birthDate: Date;

  email: string;
  password: string;
  urlProfilePicture: string;
  profilePicture : any;
  address: string;
  number: string;
  region: string;
  city: string;
  cEP: string;
  state: string;
  ratings: Array<string>;
  averageRating: number;
  availability: boolean;
  serviceType: Array<IserviceType>;
 
}
