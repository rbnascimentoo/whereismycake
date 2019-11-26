import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RaffleService } from 'src/app/services/raffle/raffle.service';
import { Raffle } from 'src/app/models/Raffle';

@Component({
  selector: 'app-view-sortition',
  templateUrl: './view-sortition.component.html',
  styleUrls: ['./view-sortition.component.css']
})
export class ViewSortitionComponent implements OnInit {

  sortiton: Raffle;
  constructor(private router: Router, private raffleService: RaffleService) { }

  ngOnInit() {
    this.sortiton = JSON.parse(localStorage.getItem('raffle'));
  }

}
