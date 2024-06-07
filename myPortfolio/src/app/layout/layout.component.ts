import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  standalone:true,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports:[RouterOutlet,HeaderComponent]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
