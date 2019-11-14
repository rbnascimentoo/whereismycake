import { Participante } from './Participante';
import { R3NgModuleMetadata } from '@angular/compiler';
export class Sorteio {

  id: string;
  data: Date;
  rodada: number;
  numeroSorteio: number;
  participante: Participante;
  participanteId: string;

  constructor(id: string, data: Date, rodada: number, numeroSorteio: number, participante: Participante, participanteId: string){
    this.id = id;
    this.data = data;
    this.rodada = rodada;
    this.numeroSorteio = numeroSorteio;
    this.participante = participante;
    this.participanteId = participanteId;
  }

}
