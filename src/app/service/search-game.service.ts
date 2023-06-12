import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToUpperCasePipe } from './to-upper-case.pipe';

@Injectable({
  providedIn: 'root',
})
export class SearchGameService {
  constructor(private upperCase: ToUpperCasePipe) {}
  // public showAddButton: any;

  searchGame(jeux: string, list: string[]): boolean {
    let showAddButon = false;
    // showAddButon = true;
    // console.log(showAddButon);
    const span = document.getElementById('result-search');
    const games = list;
    const searchedGame = games.find(
      (game) =>
        this.upperCase.transform(game) === this.upperCase.transform(jeux)
    );

    if (searchedGame) {
      if (span) {
        span.innerText = `${searchedGame} est en notre possession`;
        setTimeout(() => {
          span.innerText = '';
        }, 2000);
      }
    } else {
      if (span) {
        span.innerText = `${jeux} n'est pas encore en notre possesion, on l'ajoute ?`;
      }
    }
    if (!searchedGame) {
      return true;
    } else {
      return false;
    }
  }
}
