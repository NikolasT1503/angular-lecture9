import { Component } from '@angular/core';
import { Host1Service } from './mod1/host1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [ Host1Service]
})
export class AppComponent {
  title = 'angular-lecture9';
}
