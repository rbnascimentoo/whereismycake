
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home() {
    this.clearLocalStorage();
    this.router.navigate(['']);
  }

  participant() {
    this.clearLocalStorage();
    this.router.navigate(['participant']);
  }

  raffle() {
    this.clearLocalStorage();
    this.router.navigate(['raffle']);
  }

  cake() {
    this.clearLocalStorage();
    this.router.navigate(['cake']);
  }

  clearLocalStorage(){
    localStorage.clear();
  }

}
