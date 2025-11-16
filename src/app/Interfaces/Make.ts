import { IModel } from "./Model";

export interface IMake {
  id: string;
  makeName: string;
  origin: string;
  makeLogo: string;
  active: boolean;
  yearFounded: number;
  company: string;
  makeCode: string;
  makeAbbreviation: string;
  dateCreated: string;
  models: IModel[];
}


export interface ICreateMake {
    makeName: string;
    origin:string;
    makeLogo:string;
    yearFounded:number;
    company:string;
    makeAbbreviation:string;
}