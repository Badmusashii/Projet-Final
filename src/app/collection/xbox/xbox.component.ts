import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgModule } from '@angular/core';
import { XboxSearchService } from 'src/app/service/list/xbox-search.service';
import { SearchService } from 'src/app/service/search.service';
import { ToUpperCasePipe } from 'src/app/service/to-upper-case.pipe';
import { FilterPipe } from 'src/app/service/filter.pipe';
import { SearchGameService } from 'src/app/service/search-game.service';

import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-xbox',
  templateUrl: './xbox.component.html',
  styleUrls: ['./xbox.component.css'],
  providers: [ToUpperCasePipe, FilterPipe, SearchGameService],
})
export class XboxComponent implements OnInit, OnDestroy {
  jeux: string = '';
  showAddButton: boolean | undefined = false;
  // public span: string | undefined = document.getElementById('rsult-search');
  // xboxData = this.storage.getData('xbox');
  public xboxList: string[] = this.storage.getData('xbox')
    ? JSON.parse(this.storage.getData('xbox')!)
    : this.list.xboxList();

  constructor(
    // private searchAPI: SearchService,
    public list: XboxSearchService,
    // private upperCase: ToUpperCasePipe,
    public searchGame: SearchGameService,
    private storage: LocalStorageService
  ) {}
  ngOnInit() {
    document.body.classList.add('xbox-active');

    if (!this.storage.getData('xbox')) {
      this.storage.saveData('xbox', JSON.stringify(this.list.xboxList()));
    }
  }

  searchingGame() {
    const newXboxList = JSON.parse(this.storage.getData('xbox') || '[]');
    this.showAddButton = this.searchGame.searchGame(this.jeux, newXboxList);
  }

  addGame() {
    this.storage.pushData('xbox', this.jeux);
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
    document.body.classList.remove('xbox-active');
    this.storage.saveData('xbox', this.storage.getData('xbox')!);
  }
}
