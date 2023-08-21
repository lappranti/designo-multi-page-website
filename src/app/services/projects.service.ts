import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projectList: any = [
    {
      name: 'web-design',
      datas: [
        {
          imgUrl: './assets/web-design/desktop/image-express.jpg',
          title: 'EXPRESS',
          text: 'A multi-carrier shipping website for ecommerce businesses'
        },
        {
          imgUrl: './assets/web-design/desktop/image-transfer.jpg',
          title: 'TRANSFER',
          text:
            'Site for low-cost money transfers and sending money within seconds'
        },
        {
          imgUrl: './assets/web-design/desktop/image-photon.jpg',
          title: 'PHOTON',
          text:
            'A state-of-the-art music player with high-resolution audio and DSP effects'
        },
        {
          imgUrl: './assets/web-design/desktop/image-builder.jpg',
          title: 'BUILDER',
          text: 'Connects users with local contractors based on their location'
        },
        {
          imgUrl: './assets/web-design/desktop/image-blogr.jpg',
          title: 'BLOGR',
          text: 'Blogr is a platform for creating an online blog or publication'
        },
        {
          imgUrl: './assets/web-design/desktop/image-camp.jpg',
          title: 'CAMP',
          text:
            'Get expert training in coding, data, design, and digital marketing'
        }
      ]
    },
    {
      name: 'app-design',
      datas: [
        {
          imgUrl: './assets/app-design/desktop/image-airfilter.jpg',
          title: 'AIRFILTER',
          text:
            'Solving the problem of poor indoor air quality by filtering the air'
        },
        {
          imgUrl: './assets/app-design/desktop/image-eyecam.jpg',
          title: 'EYECAM',
          text:
            'Product that lets you edit your favorite photos and videos at any time'
        },
        {
          imgUrl: './assets/app-design/desktop/image-faceit.jpg',
          title: 'FACEIT',
          text:
            'Get to meet your favorite internet superstar with the faceit app'
        },
        {
          imgUrl: './assets/app-design/desktop/image-todo.jpg',
          title: 'TODO',
          text: 'A todo app that features cloud sync with light and dark mode'
        },
        {
          imgUrl: './assets/app-design/desktop/image-loopstudios.jpg',
          title: 'LOOPSTUDIOS',
          text: 'A VR experience app made for Loopstudios'
        }
      ]
    },
    {
      name: 'graphic-design',
      datas: [
        {
          imgUrl: './assets/graphic-design/desktop/image-change.jpg',
          title: 'TIM BROWN',
          text: 'A book cover designed for Tim Brown’s new release, ‘Change’'
        },
        {
          imgUrl: './assets/graphic-design/desktop/image-boxed-water.jpg',
          title: 'BOXED WETER',
          text: 'A simple packaging concept made for Boxed Water'
        },
        {
          imgUrl: './assets/graphic-design/desktop/image-science.jpg',
          title: 'SCIENCE',
          text: 'A poster made in collaboration with the Federal Art Project'
        }
      ]
    }
  ];
  constructor() {}

  getDesignDetailByName(design: string) {
    let datas;
    this.projectList.forEach((obj: any) => {
      let name = obj.name;
      if (name === design) {
        datas = obj.datas;
      }
    });
    return of(datas);
  }
}
