import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RaffleService } from 'src/app/services/raffle/raffle.service';
import { Raffle } from 'src/app/models/Raffle';
import { ParticipantService } from 'src/app/services/participant/participant.service';
import { Participant } from 'src/app/models/Participant';

@Component({
  selector: 'app-list-sorteio',
  templateUrl: './list-sorteio.component.html',
  styleUrls: ['./list-sorteio.component.css']
})
export class ListSorteioComponent implements OnInit {

  listRaffle: Array<Raffle> = new Array<Raffle>();

  constructor(private router: Router, private raffleService: RaffleService) { }

  ngOnInit() {
    this.search();
  }

  search() {
    this.listRaffle = new Array<Raffle>();
    this.raffleService.listRaffle().subscribe(data => {
      Array.of(data).forEach(s => {
        if (s != undefined) {
          this.listRaffle.push(s);
        }
      });
    }, err => {
      console.log('error find raffle.');
    });

  }

  newRaffle() {
    localStorage.clear();
    this.router.navigate(['raffle/new']);
  }

  deleteRaffle(id: string) {
    this.raffleService.deleteRaffle(id).subscribe(data => {
      this.search();
    }, err => {
      console.log('error delete raffle.');
    });
  }

  viewRaffle(raffle: Raffle) {
    localStorage.setItem('raffle', JSON.stringify(raffle));
    this.router.navigate(['raffle/view'])
  }

  showDataTable() {
    return this.listRaffle != null
      && this.listRaffle.length > 0
      && this.listRaffle[0] != null
      && this.listRaffle[0]._id != null
      && this.listRaffle[0]._id != '';
  }

}
