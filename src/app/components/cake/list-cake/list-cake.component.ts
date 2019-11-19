import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CakeService } from 'src/app/services/cake/cake.service';
import { Cake } from 'src/app/models/Cake';

@Component({
  selector: 'app-list-cake',
  templateUrl: './list-cake.component.html',
  styleUrls: ['./list-cake.component.css']
})
export class ListCakeComponent implements OnInit {

  listCake: Array<Cake> = new Array<Cake>();

  constructor(private router: Router, private cakeService: CakeService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.listCake = new Array<Cake>();
    this.cakeService.listCake().subscribe(data => {
      Array.of(data).forEach(element => {
        if(element != undefined) { 
          this.listCake.push(element);
          console.log(this.listCake);
        }
      });
      
    }, err => {
      console.log('erro ao buscar cakes.');
    });
  }

  newCake() {
    localStorage.clear();
    this.router.navigate(['cake/new']);
  }

  editCake(id: string) {
    localStorage.setItem('id', id);
    this.router.navigate(['cake/edit']);
  }

  deleteCake(_id) {
    this.cakeService.deleteCake(_id).subscribe(data =>{
      this.pesquisar();
    }, err => {
      console.log('erro ao deletar cake.');
    });
  }

}
