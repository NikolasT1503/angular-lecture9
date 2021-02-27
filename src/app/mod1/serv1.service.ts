import { Injectable } from '@angular/core';

/* @Injectable({
  providedIn: 'root'
  //providedIn: 'any'
}) */
@Injectable()
export class Serv1Service {
  data: {name:string} = {name: 'serv1'};

  constructor() { }
}
