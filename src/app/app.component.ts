import { Component, OnInit } from '@angular/core';
import { ToggleMenuService } from './services/toggle-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isMenuToggle = false;

  constructor(private sharedService: ToggleMenuService) {}

  ngOnInit() {
    this.sharedService.isMenuToggle$.subscribe((isMenuToggle) => {
      this.isMenuToggle = isMenuToggle;
    });
  }
}
