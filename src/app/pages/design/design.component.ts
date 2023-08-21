import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceProjectsIfnos: ProjectsService
  ) {}

  activatedDesign!: string | null;
  formatedWord!: string;
  datas!: any;

  allProject!: Array<any>;
  othtersProject!: any;

  ngOnInit(): void {
    this.activatedDesign = this.route.snapshot.paramMap.get('id');

    this.initialisationView();
  }

  initialisationView() {
    if (this.activatedDesign) {
      this.formatedWord = this.formatAppDesign(this.activatedDesign);

      this.getAllProjectt(this.formatedWord);

      this.serviceProjectsIfnos
        .getDesignDetailByName(this.activatedDesign)
        .subscribe(res => {
          this.datas = res;
        });
    }
  }

  formatAppDesign(design: string) {
    let words = design.split('-');

    let formattedWords = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return formattedWords.join(' ');
  }

  getAllProjectt(currentProjectName: string) {
    this.allProject = [
      {
        imgUrl: './assets/home/desktop/image-web-design-small.jpg',
        title: 'WEB DESIGN',
        class: 'web-design'
      },
      {
        imgUrl: './assets/home/desktop/image-app-design.jpg',
        title: 'APP DESIGN',
        class: 'app-design'
      },
      {
        imgUrl: './assets/home/desktop/image-graphic-design.jpg',
        title: 'GRAPHIC DESIGN',
        class: 'graphic-design'
      }
    ];

    currentProjectName = currentProjectName.toLocaleUpperCase();
    if (currentProjectName == 'WEB DESIGN') {
      this.allProject.splice(0, 1);
    } else if (currentProjectName == 'APP DESIGN') {
      this.allProject.splice(1, 1);
    } else {
      this.allProject.splice(2, 1);
    }

    this.othtersProject = [...this.allProject];
  }

  handleGotoProject(design: string) {
    this.activatedDesign = design;

    this.initialisationView();
    this.router.navigate(['/design', design]);
  }
}
