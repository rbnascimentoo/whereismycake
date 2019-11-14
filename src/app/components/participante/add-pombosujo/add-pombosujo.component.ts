import { Participante } from '../../../models/Participante';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipanteService } from 'src/app/services/participante/participante.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-pombosujo',
  templateUrl: './add-pombosujo.component.html',
  styleUrls: ['./add-pombosujo.component.css']
})
export class AddPombosujoComponent implements OnInit {

  nomeValid: boolean = false;
  apelidoValid: boolean = false;
  participante: Participante;
  constructor(private router: Router, private participanteService: ParticipanteService) { }

  ngOnInit() {
    this.createNewParticipante();

    if(localStorage.getItem('id') != undefined && localStorage.getItem('id') != null) {
      this.participanteService.obterParticipante(localStorage.getItem('id')).subscribe(data => {
            this.participante = data;
        }, err => {
  
        });
    }
    
  }

  createNewParticipante() {
    this.participante = new Participante(null, null, null);

    this.nomeValid = false;
    this.apelidoValid = false;
  }

  salvarParticipante() {

   this.validarParticipante();

    if(this.nomeValid && this.apelidoValid){

      if (this.participante._id != null && this.participante._id.length > 0) {
        this.participanteService.editarParticipante(this.participante).subscribe(data => {  
          this.createNewParticipante();
          this.router.navigate(['participante']);
        }, err => {
          console.log('erro ao atualizar participante!');
        });
      } else {
        this.participanteService.salvarParticipante(this.participante).subscribe(data => {  
          this.createNewParticipante();
          this.router.navigate(['participante']);
        }, err => {
          console.log('erro ao salvar participante!');
        });
      }

     
    } 
    
  }

  validarParticipante(){
    if(this.participante.nome != null && this.participante.nome.length > 0 && this.participante.nome != undefined) {
      this.nomeValid = true;
    }

    if(this.participante.apelido != null && this.participante.apelido.length > 0 && this.participante.apelido != undefined) {
      this.apelidoValid = true;
    }
  }

  cancelarInclusaoPombo() {
    this.createNewParticipante();
    this.router.navigate(['participante']);
  }

}