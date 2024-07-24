import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ScreenSizeService } from './services/screen-size.service';
import { HeaderComponent } from './components/header/header.component';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    HeaderComponent,
    MobileHeaderComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private screenSizeService = inject(ScreenSizeService);
  isMobile$ = this.screenSizeService.isMobile$
}
