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

  makeSortition: boolean = false;

  constructor(private router: Router, private raffleService: RaffleService,
              private participantService: ParticipantService, private cakeService: CakeService) { }

  ngOnInit() {
    this.creteNewRaffle();

    this.cakeService.listCake().subscribe(data => {
      Array.of(data).forEach(element => {
        if(element !== undefined && element != null) {
          this.listCake.push(element);
        }
      });
    }, err => {
      console.log('error find cakes.');
    });

    this.participantService.listParticipant().subscribe(data => {
      Array.of(data).forEach(element => {
        if(element !== undefined && element != null) {
          this.listParticipant.push(element);
        }
      });
    }, err => {
      console.log('error find participants.');
    });

    this.raffleService.listRaffle().subscribe(data => {
      Array.of(data).forEach(element => {
        if(element !== undefined && element != null) {
          this.listRaffle.push(element);
        }
      });
    }, err => {
      console.log('error find raffles.');
    });
  }

  creteNewRaffle() {
    this.makeSortition = false;

    this.raffle = new Raffle(null, null, null, null, null, null);
    this.cake = new Cake(null, null, null);
    this.participant = new Participant(null, null, null);

    this.listParticipant = new Array<Participant>();
    this.listRaffle = new Array<Raffle>();
    this.listCake = new Array<Cake>();
  }

  sortition() {

    this.makeSortition = true;

    this.participant = this.random(this.listParticipant[0], null);
    this.cake = this.random(this.listCake[0], null);

    if (this.listRaffle.length === 0 || this.listRaffle == null
        || this.listRaffle === undefined || this.listRaffle[0] === undefined
        || this.listRaffle[0]._id == null || this.listRaffle[0]._id === undefined) {

      this.raffle = new Raffle(null, new Date(), 1, 1, this.participant._id, this.cake._id);

      this.raffleService.saveRaffle(this.raffle).subscribe(data => {
        this.router.navigate(['raffle']);
      }, err => {

      });
    } else {

      /* let rodada = 0;
      let numeroSorteio = 0;
      this.listRaffle.forEach(i => {
        if (rodada <= i.rodada) {
          rodada = i.rodada;
        }
        if (numeroSorteio <= i.numberRaffle) {
          numeroSorteio = i.numberRaffle;
        }
      });

      let indexs: Array<number>;

      if(this.listRaffle.filter(r => r.rodada === rodada).length < this.listParticipant.length) {
        this.listRaffle.filter(r => r.rodada === rodada).forEach(f => {
          if (f.participantId === this.participant._id) {
            indexs.push( this.listRaffle.indexOf(f));
            this.participant = this.random(this.listParticipant, indexs);
          }
        });

        this.raffle = new Raffle(null, new Date(), rodada, numeroSorteio+1, this.participant._id, this.cake._id);
      } else {

        this.raffle = new Raffle(null, new Date(), rodada+1, numeroSorteio+1, this.participant._id, this.cake._id);
      }

      this.raffleService.saveRaffle(this.raffle).subscribe(data => {
        this.router.navigate(['raffle']);
      }, err => {

      }); */
    }
  }

  random(element, index) {

    if (index != null) {
      index.array.forEach(i => {
        index.splice(i, 1);
      });
    }

    if (element != null && element !== undefined) {
      return element[Math.floor(Math.random() * element.length)];
    }
    return null;
  }

}
