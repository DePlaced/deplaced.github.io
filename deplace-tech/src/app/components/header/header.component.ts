import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { ScreenSizeService } from '../../services/screen-size.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isMobile$: Observable<boolean>;
  mobileMenuActive = false;

  constructor(private screenSizeService: ScreenSizeService) {
    this.isMobile$ = this.screenSizeService.isMobile$;
  }

  ngOnInit(): void {}

  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }
}
