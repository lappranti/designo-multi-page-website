import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleMenuService } from 'src/app/services/toggle-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuToggle: boolean = false;

  constructor(
    private sharedService: ToggleMenuService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sharedService.updateIsMenuToggle(this.isMenuToggle);
  }

  handleToggleMenuMobile() {
    this.isMenuToggle = !this.isMenuToggle;
    this.sharedService.updateIsMenuToggle(this.isMenuToggle);
  }

  handleGotoHome() {
    this.router.navigate(['/home']);
  }

  handleSelectMenuMobile(choix: string) {
    this.router.navigate(['/' + choix]);
    this.handleToggleMenuMobile();
  }
}
