import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { getSupportedInputTypes, Platform, supportsPassiveEventListeners, supportsScrollBehavior,} from '@angular/cdk/platform';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public platform: Platform) {}
}
