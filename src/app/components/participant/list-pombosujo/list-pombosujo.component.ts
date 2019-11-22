import { Participant } from '../../../models/Participant';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantService } from 'src/app/services/participant/participant.service';

@Component({
  selector: 'app-list-pombosujo',
  templateUrl: './list-pombosujo.component.html',
  styleUrls: ['./list-pombosujo.component.css']
})
export class ListPombosujoComponent implements OnInit {

  listParticipant: Array<Participant> = new Array<Participant>();

  constructor(private router: Router, private participantService: ParticipantService) { }

  ngOnInit() {
    this.search();
  }

  search(){
    this.listParticipant = new Array<Participant>();
    this.participantService.listParticipant().subscribe(data => {
      Array.of(data).forEach(element => {
        if(element != undefined) { 
          this.listParticipant.push(element);
        }
      });
    }, err => {
      console.log('error find participant.');
    });
  }

  newParticipant() {
    localStorage.clear();
    this.router.navigate(['participant/new']);
  }

  editParticipant(id: string) {
    localStorage.setItem('id', id);
    this.router.navigate(['participant/edit']);
  }

  deleteParticipant(_id) {
    this.participantService.deleteParticipant(_id).subscribe(data =>{
      this.search();
    }, err => {
      console.log('error delete participant.');
    });
  }

  showDataTable(){
    return this.listParticipant != null 
    && this.listParticipant.length > 0 
    && this.listParticipant[0] != null
    && this.listParticipant[0]._id != null;
  }

}
