import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SortitionService } from 'src/app/services/sortition/sortition.service';
import { Sortition } from 'src/app/models/Sortition';
import { ParticipantService } from 'src/app/services/participant/participant.service';
import { Participant } from 'src/app/models/Participant';

@Component({
  selector: 'app-list-sorteio',
  templateUrl: './list-sorteio.component.html',
  styleUrls: ['./list-sorteio.component.css']
})
export class ListSorteioComponent implements OnInit {

  listSortition: Array<Sortition> = new Array<Sortition>();

  constructor(private router: Router, private sortitionService: SortitionService) { }

  ngOnInit() {
    this.search();
  }

  search() {
    this.listSortition = new Array<Sortition>();
    this.sortitionService.listSortition().subscribe(data => {
      Array.of(data).forEach(s => {
        if (s != undefined) {
          this.listSortition.push(s);
        }
      });
    }, err => {
      console.log('error find sortition.');
    });

  }

  newSortition() {
    localStorage.clear();
    this.router.navigate(['sortition/new']);
  }

  deleteSortition(id: string) {
    this.sortitionService.deleteSortiton(id).subscribe(data => {
      this.search();
    }, err => {
      console.log('error delete sortition.');
    });
  }

  viewSortition(sortition: Sortition) {
    localStorage.setItem('sortition', JSON.stringify(sortition));
    this.router.navigate(['sortition/view'])
  }

  showDataTable() {
    return this.listSortition != null
      && this.listSortition.length > 0
      && this.listSortition[0] != null
      && this.listSortition[0]._id != null
      && this.listSortition[0]._id != '';
  }

}
