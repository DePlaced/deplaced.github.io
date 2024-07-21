import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private isMobileSubject = new BehaviorSubject<boolean>(false);
  isMobile$ = this.isMobileSubject.asObservable().pipe(distinctUntilChanged());

  constructor() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  private checkScreenSize() {
    const isMobile = window.innerWidth <= 768;
    this.isMobileSubject.next(isMobile);
  }
}
