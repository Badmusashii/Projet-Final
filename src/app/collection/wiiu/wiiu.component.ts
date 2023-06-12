import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgModule } from '@angular/core';
// import { SearchGameService } from 'src/app/service/search.service';
import { WiiuSearchService } from 'src/app/service/list/wiiu-search.service';
import { ToUpperCasePipe } from 'src/app/service/to-upper-case.pipe';
import { FilterPipe } from 'src/app/service/filter.pipe';
import { SearchGameService } from 'src/app/service/search-game.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-wiiu',
  templateUrl: './wiiu.component.html',
  styleUrls: ['./wiiu.component.css'],
  providers: [FilterPipe],
})
export class WiiuComponent implements OnInit, OnDestroy {
  jeux: string = '';
  showAddButton: boolean | undefined = false;
  public wiiuList: string[] = this.storage.getData('wiiu')
    ? JSON.parse(this.storage.getData('wiiu')!)
    : this.list.wiiuList();

  constructor(
    private searchGame: SearchGameService,
    public list: WiiuSearchService,
    private upperCase: ToUpperCasePipe,
    private storage: LocalStorageService
  ) {}

  ngOnInit(): void {
    document.body.classList.add('wiiu-active');
    if (!this.storage.getData('wiiu')) {
      this.storage.saveData('wiiu', JSON.stringify(this.list.wiiuList()));
    }
  }

  searchingGame() {
    const newWiiuList = JSON.parse(this.storage.getData('wiiu') || '[]');
    this.showAddButton = this.searchGame.searchGame(this.jeux, newWiiuList);
  }

  addGame() {
    this.storage.pushData('wiiu', this.jeux);
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

  ngOnDestroy() {
    document.body.classList.remove('wiiu-active');
    this.storage.saveData('wiiu', this.storage.getData('wiiu')!);
  }
}
