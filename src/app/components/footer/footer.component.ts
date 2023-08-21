import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  socialList: Array<string> = [
    'bi bi-facebook',
    'bi bi-youtube',
    'bi bi-twitter',
    'bi bi-pinterest',
    'bi bi-instagram',
  ];

  heightElement!: any;
  element!: any;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.getSizeElement();
  }

  getSizeElement() {
    this.element = document.querySelector('.content-top');
    this.heightElement = this.element.offsetHeight;

    window.addEventListener('resize', () => {
      this.heightElement = this.element.offsetHeight;
    });
  }

  handleGotoContact() {
    this.router.navigate(['/contact']);
  }
}
