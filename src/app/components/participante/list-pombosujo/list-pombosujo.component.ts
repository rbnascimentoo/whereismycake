import { Participante } from '../../../models/Participante';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipanteService } from 'src/app/services/participante/participante.service';

@Component({
  selector: 'app-list-pombosujo',
  templateUrl: './list-pombosujo.component.html',
  styleUrls: ['./list-pombosujo.component.css']
})
export class ListPombosujoComponent implements OnInit {

  listParticipante: Array<Participante> = new Array<Participante>();

  constructor(private router: Router, private participanteService: ParticipanteService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.listParticipante = new Array<Participante>();
    this.participanteService.listarParticipante().subscribe(data => {
      Array.of(data).forEach(element => {
        if(element != undefined) { 
          this.listParticipante.push(element);
        }
      });
      
    }, err => {
      console.log('erro ao buscar pombo sujos.');
    });
  }

  novoParticipante() {
    localStorage.clear();
    this.router.navigate(['participant/new']);
  }

  editarParticipante(id: string) {
    localStorage.setItem('id', id);
    this.router.navigate(['participant/edit']);
  }

  excluirParticipante(_id) {
    this.participanteService.deletarParticipante(_id).subscribe(data =>{
      this.pesquisar();
    }, err => {
      console.log('erro ao deletar participante.');
    });
  }

}
