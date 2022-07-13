import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Observable, takeUntil, Subject, combineLatest, map } from 'rxjs';

import { CityWeather } from '../../../../shared/models/weather.model';
import { Bookmark } from '../../../../shared/models/bookmark.model';

import { HomeState } from '../../state/home.reducer';
import * as fromHomeActions from '../../state/home.actions';
import * as fromHomeSelectors from '../../state/home.selectors';
import * as fromBookmarksSelectors from '../../../bookmarks/state/bookmarks.selectors';


@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {

  cityWeather: CityWeather | any;
  searchControl!: FormControl;

  loading$!: Observable<boolean>;
  error$!: Observable<boolean>;

  cityWeather$!: Observable<CityWeather>;
  bookmarkList$!: Observable<Bookmark[]>;
  isCurrentFavorite$!: Observable<boolean>;

  private componentDestroyed$ = new Subject();

  constructor(private store: Store<HomeState>) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('', [ Validators.required ]);
    this.loading$ = this.store.select(fromHomeSelectors.selectCurrentWeatherLoading);
    this.error$ = this.store.select(fromHomeSelectors.selectCurrentWeatherError);
    this.cityWeather$ = this.store.select(fromHomeSelectors.selectCurrentWeather);

    this.bookmarkList$ = this.store.select(fromBookmarksSelectors.selectBookmarkList);

    this.isCurrentFavorite$ = combineLatest([this.cityWeather$, this.bookmarkList$])
      .pipe(map(([current, list]) => {
        if(!!current) {
          return list.some(bmk => bmk.id === current.city.id);
        }
        return false;
      }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(fromHomeActions.clearHomeState());
    this.searchControl.reset;
    this.componentDestroyed$.next([]);
    this.componentDestroyed$.unsubscribe();
  }

  doSearch(): void {
    const query = this.searchControl.value;
    this.store.dispatch(fromHomeActions.loadCurrentWeather({ query }));
    this.store.select(fromHomeSelectors.selectCurrentWeather)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(entity => this.cityWeather = entity);
  }

  onToggleBookmark() {
    const bookmark = new Bookmark();
    bookmark.id = this.cityWeather.city.id;
    bookmark.name = this.cityWeather.city.name;
    bookmark.country = this.cityWeather.city.country;
    bookmark.coord = this.cityWeather.city.coord;

    this.store.dispatch(fromHomeActions.toggleBookmark({ entity: bookmark }));
  }

}
