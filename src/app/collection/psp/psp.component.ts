import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgModule } from '@angular/core';
import { PspSearchService } from 'src/app/service/list/psp-search.service';
import { SearchGameService } from 'src/app/service/search-game.service';
import { ToUpperCasePipe } from 'src/app/service/to-upper-case.pipe';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-psp',
  templateUrl: './psp.component.html',
  styleUrls: ['./psp.component.css'],
})
export class PspComponent implements OnInit, OnDestroy {
  jeux: string = '';
  showAddButton: boolean | undefined = false;
  public pspList: string[] = this.storage.getData('sps')
    ? JSON.parse(this.storage.getData('sps')!)
    : this.list.pspList();
  constructor(
    public list: PspSearchService,
    private upperCase: ToUpperCasePipe,
    private searchGame: SearchGameService,
    private storage: LocalStorageService
  ) {}

  ngOnInit(): void {
    document.body.classList.add('psp-active');
    if (!this.storage.getData('psp')) {
      this.storage.saveData('psp', JSON.stringify(this.list.pspList()));
    }
  }

  searchingGame() {
    const newPspList = JSON.parse(this.storage.getData('psp') || '[]');
    this.showAddButton = this.searchGame.searchGame(this.jeux, newPspList);
  }

  addGame() {
    this.storage.pushData('psp', this.jeux);
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

  ngOnDestroy(): void {
    document.body.classList.remove('psp-active');
    this.storage.saveData('psp', this.storage.getData('psp')!);
  }
}
