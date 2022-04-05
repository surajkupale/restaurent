import { Injectable } from '@angular/core';

@Injectable()
export class RestService {

  constructor() { }

  getRestorrent(){
    return [
      {id: 1, name: 'Suraj Restorrent'},
      {id: 2, name: 'Suraj Anand Restorrent'},
      {id: 3, name: 'Prabhas Restorrent'},
      {id: 4, name: 'Mahalaxmi Restorrent'}
    ];
  }
}
