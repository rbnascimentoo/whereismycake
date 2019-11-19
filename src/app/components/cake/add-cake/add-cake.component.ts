import { Component, OnInit } from '@angular/core';
import { Cake } from 'src/app/models/Cake';
import { CakeService } from 'src/app/services/cake/cake.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cake',
  templateUrl: './add-cake.component.html',
  styleUrls: ['./add-cake.component.css']
})
export class AddCakeComponent implements OnInit {

  nameValid: boolean = false;
  cake: Cake;
  constructor(private router: Router, private cakeService: CakeService) { }


  ngOnInit() {
    this.createNewCake();

    if(localStorage.getItem('id') != undefined && localStorage.getItem('id') != null) {
      this.cakeService.findCake(localStorage.getItem('id')).subscribe(data => {
            this.cake = data;
        }, err => {
  
        });
    }
  }

  saveCake() {
    this.validCake();
     if(this.nameValid){
       if (this.cake._id != null && this.cake._id.length > 0) {
         this.cakeService.editCake(this.cake).subscribe(data => {  
           this.createNewCake();
           this.router.navigate(['cake']);
         }, err => {
           console.log('erro ao atualizar cake!');
         });
       } else {
         this.cakeService.saveCake(this.cake).subscribe(data => {  
           this.createNewCake();
           this.router.navigate(['cake']);
         }, err => {
           console.log('erro ao salvar cake!');
         });
       }
     } 
   }

  createNewCake() {
    this.cake = new Cake(null, null, null);
    this.nameValid = false;
  }

  validCake(){
    if(this.cake.name != null && this.cake.name.length > 0 && this.cake.name != undefined) {
      this.nameValid = true;
    }
  }

  cancel() {
    this.createNewCake();
    this.router.navigate(['cake']);
  }

}