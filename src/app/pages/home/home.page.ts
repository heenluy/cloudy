import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';

import { HomeState } from './state/home.reducer';
import * as fromHomeActions from './state/home.actions';
import * as fromHomeSelectors from './state/home.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  searchControl: FormControl = new FormControl('', [ Validators.required ]);

  constructor(private store: Store<HomeState>) { }

  ngOnInit(): void {
    this.store.pipe(select(fromHomeSelectors.selectHomeText))
      .subscribe();
  }

  doSearch(): void {
    const text = this.searchControl.value;
    this.store.dispatch(fromHomeActions.changeText({ text }));
  }

}
