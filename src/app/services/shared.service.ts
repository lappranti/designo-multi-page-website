import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private isContactActiveSource = new Subject<boolean>();

  isContactActive$ = this.isContactActiveSource.asObservable();

  upIsContactActive(isContactView: boolean) {
    this.isContactActiveSource.next(isContactView);
  }
}
