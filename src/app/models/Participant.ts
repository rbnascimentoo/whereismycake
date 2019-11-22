export class Participant {

    _id: string;
    name: string;
    nickname: string;

    constructor(_id: string, name: string, nickname: string) {
      this._id = _id;
      this.name = name;
      this.nickname = nickname;
    }

}
