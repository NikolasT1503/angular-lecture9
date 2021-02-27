import { Component, Host, Inject, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { Mod2Component } from 'src/app/mod2/mod2.component';
import { Host1Service } from '../host1.service';
import { Serv1Service } from '../serv1.service';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
  /*   providers: [Serv1Service], */
  providers: [
    { provide: 's1', useClass: Serv1Service },
    { provide: 's2', useClass: Serv1Service },
    Mod2Component
    /* Serv1Service */
  ],
/*   viewProviders: [
    { provide: 's1', useClass: Host1Service },
    Host1Service  
  ] */
})
export class Mod1Component implements OnInit {
  constructor(
    @Optional() @Host() public mod1: Host1Service,
    @Optional() @Inject('s2') public mod11: Serv1Service,
  ) {}

  ngOnInit(): void {
    this.mod1.change();
  }

  
}
