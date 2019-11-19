import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class Cake {

    _id: string;
    name: string;
    //type: String;
    price: Number;

    constructor(_id: string, name: string, /*type: String,*/ price: Number) {
      this._id = _id;
      this.name = name;
      //this.type = type;
      this.price = price;
    }

}
