import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mod1Service } from './mod1.service';
import { Mod1Component } from './mod1/mod1.component';

@NgModule({
  declarations: [Mod1Component],
  imports: [CommonModule, FormsModule],
  //providers: [Serv1Service],
  providers: [
    /* { provide: 's1', useClass: Mod1Service }, */
    { provide: 's2', useClass: Mod1Service },
  ],
  exports: [Mod1Component],
})
export class Mod1Module {}
