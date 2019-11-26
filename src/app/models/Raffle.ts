import { Participant } from './Participant';
import { R3NgModuleMetadata } from '@angular/compiler';
import { Cake } from './Cake';
export class Raffle {

  _id: string;
  date: Date;
  rodada: number;
  numberRaffle: number;
  participant: Participant;
  participantId: string;
  cake: Cake;
  cakeId: string;

  constructor(_id: string, date: Date, rodada: number, numberRaffle: number, participantId: string, cakeId: string){
    this._id = _id;
    this.date = date;
    this.rodada = rodada;
    this.numberRaffle = numberRaffle;
    this.participantId = participantId;
    this.cakeId = cakeId;
  }

}
