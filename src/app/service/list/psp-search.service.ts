import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PspSearchService {
  constructor() {}
  pspList(): string[] {
    return [
      'key of heaven',
      'fifa 10',
      'grand theft auto: liberty city stories',
      'smackdown VS raw 2009',
      'cars 2',
      'eyepet adventures',
      'invizimals: the lost tribes',
      'driver 76',
      'geronimo stilton retour au royaume de la fantasie',
      'tiger woods PGA tour 07',
      'daxter',
      'thrillville: le parc en folie',
      'need for speed underground rivals',
      'pro evolution soccer 5',
      'pro evolution soccer 2011',
      'gran turismo',
      'world series of poker tournament of champions',
      'go! sudoku',
    ];
  }
}
