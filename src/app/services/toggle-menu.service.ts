import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleMenuService {
  private isMenuToggleSource = new Subject<boolean>();

  isMenuToggle$ = this.isMenuToggleSource.asObservable();

  updateIsMenuToggle(isMenuToggle: boolean) {
    this.isMenuToggleSource.next(isMenuToggle);
  }
}
