import { Component } from '@angular/core';
import { Xbox360SearchService } from 'src/app/service/list/xbox360-search.service';
import { SearchGameService } from 'src/app/service/search-game.service';
import { ToUpperCasePipe } from 'src/app/service/to-upper-case.pipe';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-xbox360',
  templateUrl: './xbox360.component.html',
  styleUrls: ['./xbox360.component.css'],
})
export class Xbox360Component {
  jeux: string = '';
  showAddButton: boolean | undefined = false;
  public xbox360List: string[] = this.storage.getData('xbox360')
    ? JSON.parse(this.storage.getData('xbox360')!)
    : this.list.xbox360List();

  constructor(
    public list: Xbox360SearchService,
    private upperCase: ToUpperCasePipe,
    private searchGame: SearchGameService,
    private storage: LocalStorageService
  ) {}

  ngOnInit(): void {
    document.body.classList.add('xbox-active');
    if (!this.storage.getData('xbox360')) {
      this.storage.saveData('xbox360', JSON.stringify(this.list.xbox360List()));
    }
  }

  searchingGame(): void {
    const newXbox360List = JSON.parse(this.storage.getData('xbox360') || '[]');
    this.showAddButton = this.searchGame.searchGame(this.jeux, newXbox360List);
  }
  addGame() {
    this.storage.pushData('xbox360', this.jeux);
    this.showAddButton = false;
    this.searchingGame();
  }

  noAddGame() {
    this.showAddButton = false;
    const span = document.getElementById('result-search');
    if (span) {
      span.innerText = '';
    }
  }

  checkedGame(value: string) {
    console.log(value);
    const span = document.getElementById('result-search');
    if (span) {
      span.innerHTML = `Doit-on reediter ${this.upperCase.transform(
        value
      )} ? <button id='btn-yes'>Yes</button>  <button id='btn-no'>No</button>`;
      const btnyes = document.getElementById('btn-yes');
      btnyes?.addEventListener('click', () => {
        span.innerHTML = `Ok ! Par quel titre dois-je le remplacer ? <input id='input-value' type='text' placeholder='${value}'>`;
        console.log(span.innerHTML);
        const inputValue = document.getElementById(
          'input-value'
        ) as HTMLInputElement;
        inputValue?.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            const newTitle = inputValue.value;
            console.log(newTitle);
            this.storage.updateListItem('xbox360', value, newTitle);
            span.innerHTML = `${newTitle} remplacera ${value}`;
            setTimeout(() => {
              span.innerHTML = '';
            }, 1500);
          }
        });
        console.log(inputValue);
      });
    }
  }

  ngOnDestroy(): void {
    document.body.classList.remove('xbox-active');
    this.storage.saveData('xbox360', this.storage.getData('xbox360')!);
  }
}
