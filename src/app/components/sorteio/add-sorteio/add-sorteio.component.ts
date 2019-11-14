import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SorteioService } from 'src/app/services/sorteio/sorteio.service';
import { ParticipanteService } from "src/app/services/participante/participante.service";
import { Sorteio } from 'src/app/models/Sorteio';
import { Participante } from 'src/app/models/Participante';

@Component({
  selector: 'app-add-sorteio',
  templateUrl: './add-sorteio.component.html',
  styleUrls: ['./add-sorteio.component.css']
})
export class AddSorteioComponent implements OnInit {

  listParticipante: Array<Participante> = new Array<Participante>();
  participante: Participante;
  listSorteio: Array<Sorteio> = new Array<Sorteio>();
  sorteio: Sorteio;

  constructor(private router: Router, private sorteioService: SorteioService, private participanteService: ParticipanteService) { }

  ngOnInit() {
    this.creteNewSorteio();
  }

  creteNewSorteio() {
    this.sorteio = new Sorteio(null, null, null, null, null, null);
  }

  realizarSorteio() {
    this.participanteService.listarParticipante().subscribe(data => {
      //this.listPombo = data;
      Array.of(data).forEach(element => {
        this.listParticipante.push(element);
      });

      this.participante = this.random(this.listParticipante[0]);

      this.sorteioService.listarSorteio().subscribe(data => {
        Array.of(data[0]).forEach(s => {
          this.listSorteio.push(s);
        });

        if (this.listSorteio === null || this.listSorteio.length === 0
          || this.listSorteio === undefined || this.listSorteio[0] === null
          || this.listSorteio[0] === undefined) {

          this.sorteio = new Sorteio(null, new Date(), 1, 1, this.participante, this.participante._id);
          this.sorteioService.salvarSorteio(this.sorteio).subscribe(data => {
            this.router.navigate(['sorteio']);
          }, err => {

          });
        } else {
          

        }
        
      }, err => {
        console.log('erro ao buscar sorteios.');
      });

    }, err => {
      console.log('erro ao buscar participantes.');
    });

  }

  random(element) {
    return element[Math.floor(Math.random() * element.length)];
  }


}
