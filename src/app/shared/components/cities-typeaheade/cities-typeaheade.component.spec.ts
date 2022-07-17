import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesTypeaheadeComponent } from './cities-typeaheade.component';

describe('CitiesTypeaheadeComponent', () => {
  let component: CitiesTypeaheadeComponent;
  let fixture: ComponentFixture<CitiesTypeaheadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesTypeaheadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiesTypeaheadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
