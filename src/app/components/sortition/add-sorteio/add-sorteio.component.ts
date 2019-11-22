import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SortitionService } from 'src/app/services/sortition/sortition.service';
import { Sortition } from 'src/app/models/Sortition';
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

  listSortition: Array<Sortition> = new Array<Sortition>();
  sortition: Sortition;

  constructor(private router: Router, private sortitionService: SortitionService,
    private participantService: ParticipantService, private cakeService: CakeService) { }

  ngOnInit() {
    this.creteNewSorteio();
  }

  creteNewSorteio() {
    this.sortition = new Sortition(null, null, null, null, null, null);
    this.cake = new Cake(null, null, null);
    this.participant = new Participant(null, null, null);

    this.listParticipant = new Array<Participant>();
    this.listSortition = new Array<Sortition>();
    this.listCake = new Array<Cake>();
  }

  makeSortiton() {

    //sorteio
    this.sortitionService.listSortition().subscribe(data => {
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
    
            console.log(this.listSortition.some(x => x.participantId === this.participant._id));
            while (this.listSortition.some(x => x.participantId === this.participant._id)) {
              this.participant = this.random(this.listParticipant[0]);
            }
    
            if (this.listSortition[0].numberSortition <= this.listParticipant.length) {
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
    });

  }

  random(element) {
    if (element != null && element != undefined) {
      return element[Math.floor(Math.random() * element.length)];
    }

    return;

  }

}
