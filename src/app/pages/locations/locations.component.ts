import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  windowSize!: number;

  ngOnInit(): void {
    this.windowSize = window.innerWidth;

    this.getWindowSIZE();
  }

  getWindowSIZE() {
    window.addEventListener('resize', () => {
      this.windowSize = window.innerWidth;
    });
  }
}
