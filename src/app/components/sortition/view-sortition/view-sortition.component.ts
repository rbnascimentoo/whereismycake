import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SortitionService } from 'src/app/services/sortition/sortition.service';
import { Sortition } from 'src/app/models/Sortition';

@Component({
  selector: 'app-view-sortition',
  templateUrl: './view-sortition.component.html',
  styleUrls: ['./view-sortition.component.css']
})
export class ViewSortitionComponent implements OnInit {

  sortiton: Sortition;
  constructor(private router: Router, private sortitionService: SortitionService) { }

  ngOnInit() {
    this.sortiton = JSON.parse(localStorage.getItem('sortition'));
  }

}
