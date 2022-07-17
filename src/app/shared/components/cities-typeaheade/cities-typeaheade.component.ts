import { Component, OnInit } from '@angular/core';

import { Observable, switchMap, Subject, concat, of, distinctUntilChanged } from 'rxjs';

import { CitiesService } from '../../services/cities.service';
import { CityTypeaheadItem } from '../../models/city-typeahead-item.model';

@Component({
  selector: 'app-cities-typeaheade',
  templateUrl: './cities-typeaheade.component.html',
  styleUrls: ['./cities-typeaheade.component.scss']
})
export class CitiesTypeaheadeComponent implements OnInit {

  dataSource$!: Observable<CityTypeaheadItem[]>;
  input$ = new Subject<string>();


  constructor(private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.dataSource$ = concat(
      of([]),
      this.input$.pipe(
        distinctUntilChanged(),
        switchMap((key: string) => this.citiesService.getCities(key))
      )
    )

  }

}
