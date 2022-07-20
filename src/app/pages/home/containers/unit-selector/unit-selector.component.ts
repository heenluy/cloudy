import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../../shared/state/app.reducer';
import { Units } from 'src/app/shared/models/units.enum';
import * as fromConfigActions from '../../../../shared/state/config/config.actions';
import * as fromConfigSelectors from '../../../../shared/state/config/config.selectors';

import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-unit-selector',
  templateUrl: './unit-selector.component.html',
  styleUrls: ['./unit-selector.component.scss']
})
export class UnitSelectorComponent implements OnInit {

  unit$!: Observable<Units>;
  unit!: Units;

  unitsEnum = Units;

  constructor(
    private store: Store<AppState>,
    private theme: ThemeService
  ) { }

  ngOnInit(): void {
    this.unit$ = this.store.select(fromConfigSelectors.selectUnitConfig);
    this.unit$
      .subscribe(unit => this.unit = unit);

  }

  updateUnit(unit: Units): void {
    this.store.dispatch(fromConfigActions.updateUnit({ unit }));
  }

  get className(): string {
    return this.theme.current === 'light' ? '' : 'dark';
  }

}
