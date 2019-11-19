import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SorteioService } from 'src/app/services/sorteio/sorteio.service';
import { Sorteio } from 'src/app/models/Sorteio';
import { ParticipanteService } from 'src/app/services/participante/participante.service';
import { Participante } from 'src/app/models/Participante';

@Component({
  selector: 'app-list-sorteio',
  templateUrl: './list-sorteio.component.html',
  styleUrls: ['./list-sorteio.component.css']
})
export class ListSorteioComponent implements OnInit {

  listSorteio: Array<Sorteio> = new Array<Sorteio>();
  part: Participante;

  constructor(private router: Router, private sorteioService: SorteioService, private participanteService: ParticipanteService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.sorteioService.listarSorteio().subscribe(data => {
      Array.of(data).forEach(s => {
        if(s != undefined) { 
          this.listSorteio.push(s);
        }
      });
    }, err => {
      console.log('erro ao buscar sorteios.');
    });  
    
  }

  novoSorteio() {
      this.router.navigate(['sortition/new']);
  }

}
