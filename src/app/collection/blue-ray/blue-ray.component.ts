import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgModule } from '@angular/core';
import { BlueraySearchService } from 'src/app/service/list/blueray-search.service';
import { SearchGameService } from 'src/app/service/search-game.service';
import { ToUpperCasePipe } from 'src/app/service/to-upper-case.pipe';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-blue-ray',
  templateUrl: './blue-ray.component.html',
  styleUrls: ['./blue-ray.component.css'],
})
export class BlueRayComponent implements OnInit, OnDestroy {
  movie: string = '';
  showAddButton: boolean | undefined = false;
  public bluerayList: string[] = this.storage.getData('blueray')
    ? JSON.parse(this.storage.getData('blueray')!)
    : this.list.bluerayList();
  constructor(
    public list: BlueraySearchService,
    private upperCase: ToUpperCasePipe,
    private searchMovie: SearchGameService,
    private storage: LocalStorageService
  ) {}
  ngOnInit(): void {
    document.body.classList.add('blueray-active');
    if (!this.storage.getData('blueray')) {
      this.storage.saveData('blueray', JSON.stringify(this.list.bluerayList()));
    }
  }

  searchingMovie() {
    const newBluerayList = JSON.parse(this.storage.getData('blueray') || '[]');
    this.showAddButton = this.searchMovie.searchGame(
      this.movie,
      newBluerayList
    );
  }
  addMovie() {
    this.storage.pushData('blueray', this.movie);
    this.showAddButton = false;
    this.searchingMovie();
  }

  noAddMovie() {
    this.showAddButton = false;
    const span = document.getElementById('result-search');
    if (span) {
      span.innerText = '';
    }
  }
  ngOnDestroy(): void {
    document.body.classList.remove('blueray-active');
    this.storage.saveData('blueray', this.storage.getData('blueray')!);
  }
}
