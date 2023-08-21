import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { ToggleMenuService } from 'src/app/services/toggle-menu.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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

  constructor(private router: Router, private sharedService: SharedService) {}
  ngOnInit(): void {
    this.sharedService.upIsContactActive(true);
  }
  ngDestroy() {
    this.sharedService.upIsContactActive(false);
  }
  handleGotoLocations() {
    this.router.navigate(['/locations']);
  }
}
