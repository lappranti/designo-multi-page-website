import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  serviceList: Array<any> = [
    {
      img: './assets/home/desktop/illustration-passionate.svg',
      title: 'PASSIONATE',
      text:
        'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'
    },
    {
      img: './assets/home/desktop/illustration-resourceful.svg',
      title: 'RESOURCEFUL',
      text:
        'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.'
    },
    {
      img: './assets/home/desktop/illustration-friendly.svg',
      title: 'FRIENDLY',
      text:
        'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'
    }
  ];

  constructor(private router: Router) {}
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.triggerAnimation', {
      scrollTrigger: {
        trigger: '.triggerAnimation',
        start: '100px',
        end: '0px',
        markers: true,
        toggleActions: 'restart pause reverse pause'
      },
      x: -100,
      duration: 3
    });
  }

  handleGotoDesign(design: string) {
    this.router.navigate(['/design', design]);
  }

  handleGotoAbout() {
    this.router.navigate(['/about']);
  }
}
