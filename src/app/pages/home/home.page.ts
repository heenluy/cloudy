import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  searchControl: FormControl = new FormControl('', [ Validators.required ]);

  constructor() { }

  ngOnInit(): void { }

  doSearch(): void {
    console.log('control', this.searchControl);
  }

}
