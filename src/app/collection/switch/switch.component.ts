import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgModule } from '@angular/core';
import { SwitchServiceService } from 'src/app/service/list/switch-service.service';
import { SearchGameService } from 'src/app/service/search-game.service';
import { ToUpperCasePipe } from 'src/app/service/to-upper-case.pipe';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent implements OnInit, OnDestroy {
  jeux: string = '';
  showAddButton: boolean | undefined = false;
  public switchList: string[] = this.storage.getData('switch')
    ? JSON.parse(this.storage.getData('switch')!)
    : this.list.switchList();

  constructor(
    public list: SwitchServiceService,
    private upperCase: ToUpperCasePipe,
    private searchGame: SearchGameService,
    private storage: LocalStorageService,
    private searchGameOnline: SearchService
  ) {}
  ngOnInit(): void {
    document.body.classList.add('switch-active');
    if (!this.storage.getData('switch')) {
      this.storage.saveData('switch', JSON.stringify(this.list.switchList()));
    }
  }
  searchingGame(): void {
    const newSwitchList = JSON.parse(this.storage.getData('switch') || '[]');
    this.showAddButton = this.searchGame.searchGame(this.jeux, newSwitchList);
  }
  addGame() {
    this.storage.pushData('switch', this.jeux);
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

  checkedGameOnline(value: string) {
    console.log(value);
    this.searchGameOnline.searchGameOnline(value).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    document.body.classList.remove('switch-active');
    this.storage.saveData('switch', this.storage.getData('switch')!);
  }
}
