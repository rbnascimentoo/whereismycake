import { Participant } from './Participant';
import { R3NgModuleMetadata } from '@angular/compiler';
import { Cake } from './Cake';
export class Sortition {

  _id: string;
  date: Date;
  rodada: number;
  numberSortition: number;
  participant: Participant;
  participantId: string;
  cake: Cake;
  cakeId: string;

  constructor(_id: string, date: Date, rodada: number, numberSortition: number, participantId: string, cakeId: string){
    this._id = _id;
    this.date = date;
    this.rodada = rodada;
    this.numberSortition = numberSortition;
    this.participantId = participantId;
    this.cakeId = cakeId;
  }

}
