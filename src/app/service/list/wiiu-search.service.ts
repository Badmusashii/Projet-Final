import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WiiuSearchService {
  constructor() {}

  wiiuList(): string[] {
    return [
      'PIKMIN 3',
      'super smash bros for wii u',
      'super mario 3d world',
      'sonic boom',
      'zombie u',
      'mario party 10',
      'nintendoland',
    ];
  }
}
