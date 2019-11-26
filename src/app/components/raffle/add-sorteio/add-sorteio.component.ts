import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RaffleService } from 'src/app/services/raffle/raffle.service';
import { Raffle } from 'src/app/models/Raffle';
import { ParticipantService } from 'src/app/services/participant/participant.service';
import { Participant } from 'src/app/models/Participant';
import { CakeService } from 'src/app/services/cake/cake.service';
import { Cake } from 'src/app/models/Cake';

@Component({
  selector: 'app-add-sorteio',
  templateUrl: './add-sorteio.component.html',
  styleUrls: ['./add-sorteio.component.css']
})
export class AddSorteioComponent implements OnInit {

  listParticipant: Array<Participant> = new Array<Participant>();
  participant: Participant = new Participant(null, null, null);

  listCake: Array<Cake> = new Array<Cake>();
  cake: Cake = new Cake(null, null, null);

  listRaffle: Array<Raffle> = new Array<Raffle>();
  raffle: Raffle;

  constructor(private router: Router, private raffleService: RaffleService,
    private participantService: ParticipantService, private cakeService: CakeService) { }

  ngOnInit() {
    this.creteNewRaffle();
  }

  creteNewRaffle() {
    this.raffle = new Raffle(null, null, null, null, null, null);
    this.cake = new Cake(null, null, null);
    this.participant = new Participant(null, null, null);

    this.listParticipant = new Array<Participant>();
    this.listRaffle = new Array<Raffle>();
    this.listCake = new Array<Cake>();
  }

  makeRaffle() {

    //sorteio
    /*this.sortitionService.listSortition().subscribe(data => {
      Array.of(data[0]).forEach(s => {
        this.listSortition.push(s);
      });

      //participantes
      this.participantService.listParticipant().subscribe(data => {
        //this.listPombo = data;
        Array.of(data).forEach(element => {
          this.listParticipant.push(element);
        });

        this.cakeService.listCake().subscribe(data => {
          Array.of(data).forEach(c => {
            this.listCake.push(c);
          });

          this.participant = this.random(this.listParticipant[0]);
          this.cake = this.random(this.listCake[0]);

          if (this.listSortition === null || this.listSortition.length === 0
            || this.listSortition === undefined || this.listSortition[0] === null
            || this.listSortition[0] === undefined) {
    
            this.sortition = new Sortition(null, new Date(), 1, 1, this.participant._id, this.cake._id);
    
            this.sortitionService.saveSortition(this.sortition).subscribe(data => {
              this.router.navigate(['sortition']);
            }, err => {
    
            });
          } else {
     
            while (this.listSortition.some(x => x.participantId === this.participant._id && x.numberSortition)) {
              this.participant = this.random(this.listParticipant[0]);
            }
    
            if (this.listSortition.length <= this.listParticipant.length) {
              this.sortition = new Sortition(null, new Date(), this.listSortition[0].rodada, this.listSortition[0].numberSortition + 1, this.participant._id, this.cake._id);
            } else {
              this.sortition = new Sortition(null, new Date(), this.listSortition[0].rodada + 1, this.listSortition[0].numberSortition + 1, this.participant._id, this.cake._id);
            }
    
            this.sortitionService.saveSortition(this.sortition).subscribe(data => {
              this.router.navigate(['sortition']);
            }, err => {
    
            });
          }
  
        }, err => {
          console.log('error find cakes.');
        }); 

      }, err => {
        console.log('error find participants.');
      });

    }, err => {
      console.log('error find sortitions.');
    });*/

  }

  random(element) {
    if (element != null && element != undefined) {
      return element[Math.floor(Math.random() * element.length)];
    }

    return;

  }

}
