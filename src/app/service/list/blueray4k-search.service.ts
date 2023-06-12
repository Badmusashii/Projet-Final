import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Blueray4kService {
  constructor() {}
  blueray4kList(): string[] {
    return [
      'spider-man far from home',
      'les eternels',
      'shang-chi',
      'black widow',
      'captain marvel',
      'avengers endgame',
      'dune',
      'tenet',
    ];
  }
}
