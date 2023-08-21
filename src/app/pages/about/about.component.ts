import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  windowSize!: number;

  locationList: Array<any> = [
    {
      imgUrl: '../../../assets/shared/desktop/illustration-canada.svg',
      name: 'Canada'
    },
    {
      imgUrl: '../../../assets/shared/desktop/illustration-australia.svg',
      name: 'Autralia'
    },
    {
      imgUrl: '../../../assets/shared/desktop/illustration-united-kingdom.svg',
      name: 'United Kingdom'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.windowSize = window.innerWidth;
    this.getWindowSIZE();
  }

  getWindowSIZE() {
    window.addEventListener('resize', () => {
      this.windowSize = window.innerWidth;
    });
  }

  handleGotoLocations() {
    this.router.navigate(['/locations']);
  }
}
