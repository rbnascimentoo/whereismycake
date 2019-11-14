export class Participante {

    _id: string;
    nome: string;
    apelido: string;

    constructor(_id: string, nome: string, apelido: string) {
      this._id = _id;
      this.nome = nome;
      this.apelido = apelido;
    }

}
