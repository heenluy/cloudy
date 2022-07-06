import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // TODO: tornar o menu responsivo
  cloudyLogo: string = '../../../../assets/images/svg/logo.svg';
  logoDesc: string = 'Cloudy Logo';

  constructor() { }

  ngOnInit(): void {
  }

}
