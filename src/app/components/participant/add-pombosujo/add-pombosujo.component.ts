import { Participant } from '../../../models/Participant';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantService } from 'src/app/services/participant/participant.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-pombosujo',
  templateUrl: './add-pombosujo.component.html',
  styleUrls: ['./add-pombosujo.component.css']
})
export class AddPombosujoComponent implements OnInit {

  nomeValid: boolean = false;
  apelidoValid: boolean = false;
  participant: Participant;
  constructor(private router: Router, private participantService: ParticipantService) { }

  ngOnInit() {
    this.createNewParticipante();

    if(localStorage.getItem('id') != undefined && localStorage.getItem('id') != null) {
      this.participantService.findParticipant(localStorage.getItem('id')).subscribe(data => {
            this.participant = data;
        }, err => {
  
        });
    }
    
  }

  createNewParticipante() {
    this.participant = new Participant(null, null, null);

    this.nomeValid = false;
    this.apelidoValid = false;
  }

  saveParticipant() {

   this.validarParticipante();

    if(this.nomeValid && this.apelidoValid){

      if (this.participant._id != null && this.participant._id.length > 0) {
        this.participantService.editParticipant(this.participant).subscribe(data => {  
          this.createNewParticipante();
          this.router.navigate(['participant']);
        }, err => {
          console.log('erro ao atualizar participante!');
        });
      } else {
        this.participantService.saveParticipant(this.participant).subscribe(data => {  
          this.createNewParticipante();
          this.router.navigate(['participant']);
        }, err => {
          console.log('erro ao salvar participante!');
        });
      }

     
    } 
    
  }

  validarParticipante(){
    if(this.participant.name != null && this.participant.name.length > 0 && this.participant.name != undefined) {
      this.nomeValid = true;
    }

    if(this.participant.nickname != null && this.participant.nickname.length > 0 && this.participant.nickname != undefined) {
      this.apelidoValid = true;
    }
  }

  cancel() {
    this.createNewParticipante();
    this.router.navigate(['participant']);
  }

}