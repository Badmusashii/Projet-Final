import { Component } from '@angular/core';
import { SearchGameService } from 'src/app/service/search-game.service';
import { ToUpperCasePipe } from 'src/app/service/to-upper-case.pipe';
import { Blueray4kService } from 'src/app/service/list/blueray4k-search.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-blueray4k',
  templateUrl: './blueray4k.component.html',
  styleUrls: ['./blueray4k.component.css'],
})
export class Blueray4kComponent {
  movie: string = '';
  showAddButton: boolean | undefined = false;
  public blueray4kList: string[] = this.storage.getData('4k')
    ? JSON.parse(this.storage.getData('4k')!)
    : this.list.blueray4kList();

  constructor(
    public list: Blueray4kService,
    private upperCase: ToUpperCasePipe,
    private searchMovie: SearchGameService,
    private storage: LocalStorageService
  ) {}

  ngOnInit(): void {
    document.body.classList.add('blueray-active');
    if (!this.storage.getData('4k')) {
      this.storage.saveData('4k', JSON.stringify(this.list.blueray4kList()));
    }
  }

  searchingMovie() {
    const new4kList = JSON.parse(this.storage.getData('4k') || '[]');
    this.showAddButton = this.searchMovie.searchGame(this.movie, new4kList);
  }

  addMovie() {
    this.storage.pushData('4k', this.movie);
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
    this.storage.saveData('4k', this.storage.getData('4k')!);
  }
}
