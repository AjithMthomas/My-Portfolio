import { Component, OnInit } from '@angular/core';
import { Phase1Component } from '../landingPageComponets/phase1/phase1.component';

@Component({
  standalone:true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[Phase1Component]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
