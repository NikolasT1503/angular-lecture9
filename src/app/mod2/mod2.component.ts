import { Component, OnInit } from '@angular/core';
import { Serv1Service } from '../mod1/serv1.service';

@Component({
  selector: 'app-mod2',
  templateUrl: './mod2.component.html',
  styleUrls: ['./mod2.component.css']
})
export class Mod2Component implements OnInit {

  constructor(public mod1: Serv1Service) { }

  ngOnInit(): void {
  }

}
