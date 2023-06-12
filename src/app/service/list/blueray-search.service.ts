import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlueraySearchService {
  constructor() {}

  bluerayList(): string[] {
    return [
      'benjamin gates 2',
      'pacific rim',
      'watchmen',
      'die hard 4',
      'las vegas 21',
      'batman begins',
      '300',
      'eragon',
      'transformers 3',
      'le hobbit: un voyage inattendue',
      'star trek into darkness',
      'le hobbit: la desolation de smaug',
      'narnia 2: le prince caspian',
      'jumper',
      'wall e',
      'les chroniques de spiderwick',
      'inglorious bastards',
      'death race',
      'speed racer',
      'the spirit',
      'je suis une legende',
      'hellboy',
      "pirates des caraibes 3: jusqu'au bout du monde",
      'pirates des caraibes 2: le secret du coffre maudit',
      'la nuit au musée',
      'starship troopers',
      'Avengers',
      'punisher zone de guerre',
      'kaamelott saison 5',
      'the dark knight',
      "l'incroyable hulk",
      'the marine',
    ];
  }
}
